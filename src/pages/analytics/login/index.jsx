import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [loader, setloader] = useState(false);
  const { data, status } = useSession(); // Get the session data
  const router = useRouter();

  useEffect(() => {
    if (data?.user && status === "authenticated") {
      router.push("/analytics/dashboard");
    }
  }, [data, status]);

  const handleSubmit = async (values, { setSubmitting }) => {
    setError(false);
    setloader(true);
    const searchQuery = localStorage.getItem("loginFrom");
    await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    })
      .then((res) => {
        setloader(false);
        if (res.ok === false) {
          setError(true);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">           

          <div className={styles.login_main_wrap}>
            <div className="header_logo">
              <Link href="#">
                <Image
                  src="/Inckd-logo-footer-black.svg"
                  alt="Logo"
                  width="105"
                  height="31"
                  priority
                />
              </Link>
            </div>
            <div className={styles.sign_in_form}>
              {error && (
                <h1 className={styles.errorMessage}> Not an analytic user </h1>
              )}
              <Formik
                initialValues={userInfo}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                <Form className="row">
                  <div class="col-md-12">
                    <h1>Login</h1>
                  </div>
                  <div class="col-md-12">
                      <div className={styles.input_box}>
                        {/* <label htmlFor="username">username</label> */}
                        <Field
                          type="username"
                          id="username"
                          name="username"
                          placeholder="Enter Your username"
                          className={styles.input_txt}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className={styles.error}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className={styles.input_box}>
                        {/* <label htmlFor="password">Password</label> */}
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter Your Password"
                          className={styles.input_txt}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={styles.error}
                        />
                      </div>                    
                  </div>
                  <div class="col-md-12">
                    <div style={{"display":"flex" ,"justifyContent":"center","alignItems":"center", "gap":"11px"}}>
                      <button
                        type="submit"
                        disabled={loader}
                        className={styles.btn_login}
                      >
                        Login
                      </button>
                      {loader ? (
                        <Image src="/6.gif" alt="loader" width={25} height={25} />
                      ) : null}{" "}
                    </div>
                    
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

          </div>
      </div>
    </div>

    </>
  );
};

export default Login;
