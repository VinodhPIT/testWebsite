import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  tattooType: Yup.string().required("Please select one option"),

});

const _Form = () => {
  const { t } = useTranslation();


  const [state, setState] = useState({
    isShown: false,
  });
  const router = useRouter();

  const onSubmit = () => {
    router.push("/");
  };

  return (
    <div class="form_right_wrap">
      <div>
        <div style={{ margin: "0 auto", padding: "0px" }}>
          {!state.isShown ? (
            <div>
              <h4>{t("common:contactUsPage.in-touch")}</h4>
              <h6>{t("common:contactUsPage.who-you-are")}</h6>
              <Formik
                initialValues={{
                  tattooType: "",
                  email: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {

              

                  fetch(
                    `https://us-central1-inckd-9a593.cloudfunctions.net/openZendeskTicket`,
                    {
                      method: "POST",
                      body: JSON.stringify({
                        ticket: {
                          assignee_email: "roland@inckd.com",
                          subject: "[CONTACT FORM] New contact form message",
                          comment: {
                            body: values.message,
                          },
                          requester: {
                            name: values.email,
                            email: values.email,
                          },
                          custom_fields: [
                            { id: "5636138834717", value: values.tattooType },
                          ],
                        },
                      }),
                    }
                  )
                    .then((e) => {
                      setState((prevSearchState) => ({
                        ...prevSearchState,
                        isShown: true,
                      }));
                      resetForm();
                    })
                    .catch((e) => {
                      resetForm();
                    });
                }}
              >
                {({ values, isSubmitting, errors }) => (
                  <Form class="form_floating">
                    <div class="form_block">
                      <div className="form_group radio_block radio_form_grid">
                        <label class="form_radio">
                          <Field
                            type="radio"
                            name="tattooType"
                            value="Tatoo"
                            checked={values.tattooType === "Tatoo"}
                          />
                          Tattoo lover
                        </label>
                        <label class="form_radio">
                          <Field
                            type="radio"
                            name="tattooType"
                            value="Artists"
                            checked={values.tattooType === "Artists"}
                          />
                          Artist
                        </label>
                        <label class="form_radio">
                          <Field
                            type="radio"
                            name="tattooType"
                            value="Studio"
                            checked={values.tattooType === "Studio"}
                          />
                          Studio
                        </label>
                        <label class="form_radio">
                          <Field
                            type="radio"
                            name="tattooType"
                            value="Other"
                            checked={values.tattooType === "Other"}
                          />
                          Other
                        </label>

                     

                      </div>

                      <ErrorMessage
                          name="tattooType"
                          component="div"
                          className="error"
                        />

                    </div>

                    <div class="form_block">
                      <div className="form_group">
                        {/* <label>Email:</label> */}
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          className="form_control"
                        />                        
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div class="form_block">
                      <div className="form_group">
                        {/* <label>Message:</label> */}
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="How we can help you?"
                          className="form_control"
                        />                        
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div class="form_block">
                      <div className="form_group">
                        <button
                          type="submit"
                         
                          class="btn_secondary h_48 w_100pc"
                          style={{ opacity: isSubmitting ? 0.5 : 1 }}
                        >
                          {isSubmitting ?  t("common:submitting")  : t("common:submit") }
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div class="form_submit_block">
              <Image
                src="/success-tick.svg" 
                width={81}
                height={81}
                priority
                alt="Form submitted" 
              />
              <h4>Form submitted</h4>
              <p>
                Thank you!
              </p>
              <button
                type="submit"
                class="btn_outline_secondary w_100pc h_48 hidden"
                onClick={() => onSubmit()}
              >
                Ok. got it!
              </button>
              <ul className="download_app">
                <li className="download_app_title">
                  <h6>{t("common:download-our-app")}</h6>
                </li>
                <li>
                  <Link href={APP_LINK_APPLE} target="_blank">
                    <img src="/app-store-new.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href={APP_LINK_GOOGLE} target="_blank">
                    <img src="/g-play-new.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default _Form;
