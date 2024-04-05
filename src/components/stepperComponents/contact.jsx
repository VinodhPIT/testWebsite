import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";








const ContactForm = () => {

  const {
    setEmail,
    setPhone,
    nextPage,
    email: storedEmail,
    phone: storedPhone,
  } = useRequestForm(); // Zustand setters

  const handleSubmit = (values) => {
    setEmail(values.email); // Update email in Zustand state
    setPhone(values.phone); // Update phone in Zustand state
    nextPage();
  };
  const { t } = useTranslation();



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("common:contactUsPage.Invalid email"))
      .required(t("common:contactUsPage.Email is required")),
      phone: Yup.string()
      .matches(/^[0-9()+\- ]+$/, t("common:contactUsPage.InvalidNumber"))
  });

  

  return (    
      <>
      <div className="full_col_block h_126_pc">
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
                      {({ errors, touched }) => (
                        <Form class="form_floating">
                          <div class="form_block">
                            <label htmlFor="email">{t("common:stepper.enterEmail")}</label>
                            <Field type="email" id="email" name="email" className="form_control" placeholder="Your e-mail"/>
                            <ErrorMessage name="email" component="div"  className="error"/>
                          </div>
                          <div class="form_block"> 
                            <label htmlFor="phone">{t("common:stepper.enterPhone")}</label>
                            <Field type="text" id="phone" name="phone" className="form_control" placeholder="Your phone number" />
                            <ErrorMessage name="phone" component="div" className="error" />
                          </div>
                          <button type="submit" className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end">{t("common:next")}</button>
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
