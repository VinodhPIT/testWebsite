import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import useAppStoreLink from "@/hooks/useAppStoreLink";

import { useQrModal } from '@/context/ModalContext';

import useTranslation from "next-translate/useTranslation";

import { APP_LINK_APPLE, BLUR_URL } from "@/constants/constants";

import { contactFormFields } from "@/utils/formData";
import { schemaValidator, initialValues } from "@/schema/contactForm.schema";

const _Form = () => {
  const { t } = useTranslation();
  const formData = contactFormFields(t);

  const [state, setState] = useState({
    isShown: false,
  });
  const router = useRouter();

  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  return (
    <div className="contact_form_block max_w_420 w_100pc m_max_100">
        {!state.isShown ? (
          <div>
            <h1 className="color_gray_550 custom_fs_40 custom_fs_m_28 fw_700 mb_20 m_mb_15">{t("common:contactUsPage.Get in touch")}</h1>
            <h6 className="color_black_450 custom_fs_20 lh_22 custom_fs_m_18 fw_400 mb_10 m_mb_15">{t("common:contactUsPage.who-you-are")}</h6>
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
                        //assignee_email: "roland@inckd.com",
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
                <Form className="form_block">
                  <div className="form_block">
                    <div className="form_group m_mb_0">
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
                        className="button_primary w_100pc"
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
            <h1 className="color_gray_550 custom_fs_40 custom_fs_m_28 fw_700 mt_25 m_mt_15 mb_10 m_mb_10">{t("common:Form submitted")}</h1>
            <p >{t("common:Thank you")}</p>
            <p>{"We’ll get back to you soon.."}</p>
            <Link
              href="" 
              className="button_primary_outline w_min_230 mt_40 m_mt_25 max_w_375 w_100pc m_w_100pc max_m_w_100pc"
              >
              {"Ok. got it!"}
            </Link>
            <button
              onClick={openModal}
              className="button_primary mob_hidden w_min_230 max_w_375 w_100pc m_w_100pc max_m_w_100pc mt_15"
            >
              {"Get our mobile app"}
            </button>

            <Link href={appStoreLink} target="_blank" className="mt_25">
              <Image
                priority
                src={imageSrc}
                alt={
                  appStoreLink === APP_LINK_APPLE
                    ? "App store"
                    : "GooglePlay"
                }
                width={134}
                height={41}
                placeholder="blur"
                blurDataURL={BLUR_URL}
                className="custom_download_icons desk_hidden"
              />
            </Link>
            
          </div>
        )}
    </div>
  );
};

export default _Form;
