import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";
import { contactFormFields } from "@/utils/formData";
import { schemaValidator, initialValues } from "@/schema/contactForm.schema";

const _Form = () => {
  const { t } = useTranslation();
  const formData = contactFormFields(t);

  const [state, setState] = useState({
    isShown: false,
  });
  const router = useRouter();



  return (
    <div className="form_right_wrap">
      <div>
        <div style={{ margin: "0 auto", padding: "0px" }}>
          {!state.isShown ? (
            <div>
              <h4>{t("common:contactUsPage.Get in touch")}</h4>
              <h6>{t("common:contactUsPage.who-you-are")}</h6>
              <Formik
                initialValues={initialValues}
                validationSchema={schemaValidator(t)}
                onSubmit={(values, { resetForm }) => {
                  fetch(
                    // `https://us-central1-inckd-9a593.cloudfunctions.net/openZendeskTicket`,
                    {
                      method: "POST",
                      body: JSON.stringify({
                        ticket: {
                          // assignee_email: "roland@inckd.com",
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
                  <Form className="form_floating">
                    <div className="form_block">
                      <div className="form_group">
                        <div className="form_group radio_block radio_form_grid">
                          {formData.map((field, index) => {
                            return (
                               field.type === "radio" && (
                                <label className="form_radio" key={index}>
                                  <Field
                                    type={field.type}
                                    name={field.name}
                                    value={field.value}
                                    checked={values.tattooType === field.value}
                                  />
                                  {field.label}
                                </label>
                              )
                          
                            );
                          })}
                          <ErrorMessage
                            name="tattooType"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form_block">
                      {formData.map((field, index) => {
                        return (
                          field.type !== "radio" && (
                            <div key={index} className="form_group">
                              <Field
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                className="form_control"
                                as={
                                  field.type === "textarea"
                                    ? "textarea"
                                    : undefined
                                }
                              />
                              <ErrorMessage
                                name={field.name}
                                component="div"
                                className="error"
                              />
                            </div>
                          )
                        );
                      })}
                    </div>

                    <div className="form_block">
                      <div className="form_group">
                        <button
                          type="submit"
                          className="btn_secondary h_48 w_100pc"
                          style={{ opacity: isSubmitting ? 0.5 : 1 }}
                        >
                          {isSubmitting
                            ? t("common:submitting")
                            : t("common:submit")}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div className="form_submit_block">
              <Image
                src="/success-tick.svg"
                width={81}
                height={81}
                priority
                alt="Form submitted"
              />
              <h4>{t("common:Form submitted")}</h4>

              <p>{t("common:Thank you")}</p>

              <ul className="download_app">
                <li className="download_app_title">
                  <h6>{t("common:download-our-app")}</h6>
                </li>
                <li>
                  <Link href={APP_LINK_APPLE} target="_blank">
                    <Image
                      priority
                      src="/app-store-new.svg"
                      alt="App store"
                      width={134}
                      height={41}
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="custom_download_icons"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={APP_LINK_GOOGLE} target="_blank">
                    <Image
                      priority
                      src="/g-play-new.svg"
                      alt="Play store"
                      width={134}
                      height={41}
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="custom_download_icons"
                    />
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
