import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "@/apiConfig/axios.instance";
import API_URL from '@/apiConfig/api.config';

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
          const value = { username, password };

          // Use Axios for making the API request
          const response = await axiosInstance.post(
            `${process.env.apiDomain}${API_URL.ANALYTICS_LOGIN.LOGIN}`,
            value

          );

          const user = response.data;

          if (user.message === "Login successful") {
            const { access_token, scope, ...userData } = user.data;
            // Return the user data along with the additional information
            return {
              myToken: access_token,
              scope: scope,
              name: user.username,
              role: user.role
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
    signOut: "/analytics/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    async jwt(params) {
      if (params.user) {
        params.token.myToken = params.user.myToken;
        params.token.scope = params.user.scope;
        params.token.name = params.user.name;
        params.token.role = params.user.role;
      }
      return params.token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.myToken = token.myToken;
        session.user.scope = token.scope;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
