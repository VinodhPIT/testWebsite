import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      phone: Yup.string()
      .matches(/^[0-9()+\- ]+$/, "Invalid phone number")
  });



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

  return (
    <div>
      <h2>Contact Form</h2>
      <Formik
        initialValues={{ email: storedEmail, phone: storedPhone }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Enter your email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phone">Enter your phone number (optional)</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
