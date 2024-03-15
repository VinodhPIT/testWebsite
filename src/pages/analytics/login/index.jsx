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
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { loginFields } from "@/utils/formData";
import { schemaValidator, loginInitialValues } from "@/schema/login.schema";

const Login = () => {
  const [error, setError] = useState(false);
  const [loader, setloader] = useState(false);
  const { data, status } = useSession(); // Get the session data
  const router = useRouter();

  const { t } = useTranslation();
  const formData = loginFields(t);

  useEffect(() => {
    if (data?.user && status === "authenticated") {
      router.replace("/analytics/dashboard");
    }
  }, [data, status]);

  const handleSubmit = async (values, { setSubmitting }) => {
    setError(false);
    setloader(true);
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
      <Head>
        <title>{t("common:AnalyticLogin.Login")}</title>
      </Head>

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
                  <h1 className={styles.errorMessage}>
                    {" "}
                    {t("common:AnalyticLogin.NotUser")}
                  </h1>
                )}
                <Formik
                  initialValues={loginInitialValues}
                  validationSchema={schemaValidator(t)}
                  onSubmit={handleSubmit}
                >
                  <Form className="row">
                    <div class="col-md-12">
                      <h1>{t("common:AnalyticLogin.Login")}</h1>
                    </div>
                    {formData.map((field, index) => (
                      <div className="col-md-12" key={index}>
                        <div className={styles.input_box}>
                          <Field
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            placeholder={field.placeholder}
                            className={styles.input_txt}
                          />
                          <ErrorMessage
                            name={field.name}
                            component="div"
                            className={styles.error}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="col-md-12">
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary btn_login"
                          type="submit"
                        >
                          <span role="status">
                            {t("common:AnalyticLogin.Login")}
                          </span>
                          {loader ? (
                            <span
                              className="spinner-border spinner-border-sm"
                              aria-hidden="true"
                            ></span>
                          ) : null}
                        </button>
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
