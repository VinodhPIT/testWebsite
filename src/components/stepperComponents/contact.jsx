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
    <div>
     <h5>{t("common:stepper.title6")}</h5>
      <Formik
        initialValues={{ email: storedEmail, phone: storedPhone }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">{t("common:stepper.enterEmail")}</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phone">{t("common:stepper.enterPhone")}</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
             <button type="submit">{t("common:next")}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
