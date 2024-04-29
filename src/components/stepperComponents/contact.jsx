import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";
import { artistContact } from "@/apiConfig/webService";

const ContactForm = () => {
  const {
    setEmail,
    setPhone,
    nextPage,
    email: storedEmail,
    phone: storedPhone,
    checkUserExists,
    userExists,
  } = useRequestForm(); // Zustand setters
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (values) => {
    setLoader(true);
    setEmail(values.email);
    setPhone(values.phone);
    let res = await artistContact(values);
    setLoader(false);
    checkUserExists(res.exists);
    nextPage();
  };

  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("common:contactUsPage.Invalid email"))
      .required(t("common:contactUsPage.Email is required")),
    phone: Yup.string().matches(
      /^[0-9()+\- ]+$/,
      t("common:contactUsPage.InvalidNumber")
    ),
  });

  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col">
                  <h2>{t("common:stepper.title6")}</h2>
                  <div className="request_contact_form">
                    <Formik
                      initialValues={{ email: storedEmail, phone: storedPhone }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, errors, touched }) => (
                        <Form className="form_floating">
                          <div className="form_block">
                            <label htmlFor="email">
                              {t("common:stepper.enterEmail")}
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form_control"
                              placeholder="Your e-mail"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </div>
                          <div className="form_block">
                            <label htmlFor="phone">
                              {t("common:stepper.enterPhone")}
                            </label>
                            <Field
                              type="text"
                              id="phone"
                              name="phone"
                              className="form_control"
                              placeholder="Your phone number"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="error"
                            />
                          </div>

                          {/* Conditionally render the submit button */}
                          {values.email && (
                            <button
                              type="submit"
                              className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end"
                            >
                              {t("common:next")}
                              {loader && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
