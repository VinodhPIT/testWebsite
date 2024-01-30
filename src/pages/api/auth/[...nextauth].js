import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const { username, password } = credentials;
          let value = { username, password };

          const response = await fetch(
            `${process.env.apiDomain}/analytics/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(value),
            }
          );

          const user = await response.json();

          if (user.message === "Login successful") {
            const { access_token, scope, ...userData } = user.data;
            // Return the user data along with the additional information
            return {
              myToken: access_token,
              scope: scope,
              name: user.username,
            };
          }
        } catch (error) {
          
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/analytics/login",
  },
    secret: process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    async jwt(params) {
      if (params.user) {
        params.token.myToken = params.user.myToken;
        params.token.scope = params.user.scope;
        params.token.name = params.user.name;
      }
      return params.token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.myToken = token.myToken;
        session.user.scope = token.scope;
        session.user.name = token.name;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
