import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import API_URL from "@/apiConfig/api.config";
import { joinArtistFields } from "@/utils/formData";
import {
  schemaValidator,
  joinartistInitialValues,
} from "@/schema/joinartist.schema";

const _Form = () => {
  const [state, setState] = useState({
    isShown: false,
  });
  const { t } = useTranslation();
  const formData = joinArtistFields(t);
  const router = useRouter();

  const onSubmit = () => {
    router.push("/");
  };

  return (
    <div className="form_right_wrap">
      <div style={{ margin: "0 auto", padding: "0px" }}>
        {state.isShown === false ? (
          <div>
            <h4>{t("common:joinartistPage.Enter details")}</h4>

            <Formik
              initialValues={joinartistInitialValues}
              validationSchema={schemaValidator(t)}
              onSubmit={(values, { resetForm }) => {
                fetch(`${process.env.apiDomain}${API_URL.SEARCH.ARTIST_FORM}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    first_name: values.name,
                    last_name: "",
                    email: values.email,
                    country: values.location,
                    city_name: values.city,
                    instagram: values.instagram,
                    source: "web",
                  }),
                })
                  .then((e) => {
                    setState((prevSearchState) => ({
                      ...prevSearchState,
                      isShown: true,
                    }));

                    resetForm();
                  })
                  .catch((e) => console.log(e));
              }}
            >
              {({ errors, isSubmitting }) => (
                <Form className="form_floating">
                  {formData.map((field, index) => (
                    <div className="form_block" key={index}>
                      <div className="form_group">
                        {field.type === "select" ? (
                          <div className="form_selec_wrap">
                            <Field
                              as={field.type}
                              name={field.name}
                              id={field.name}
                              className={field.className}
                            >
                              {field.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option.value}>
                                  {option.text}
                                </option>
                              ))}
                            </Field>
                          </div>
                        ) : (
                          <>
                            <Field
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              placeholder={field.placeholder}
                              className="form_control"
                            />
                            {field.type !== "checkbox" && (
                              <label
                                htmlFor={field.htmlFor}
                                className={field.required ? "required" : ""}
                              >
                                {field.label}
                              </label>
                            )}
                          </>
                        )}
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="form_block">
                    <div className="form_group">
                      <button
                        type="submit"
                        className="btn_secondary h_48 w_100pc"
                        disabled={isSubmitting}
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
            <button
              type="submit"
              className="btn_outline_secondary w_100pc h_48 hidden"
              onClick={() => onSubmit()}
            >
              Ok.got it !
            </button>
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
                    blurDataURL={blurDataURL}
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
                    blurDataURL={blurDataURL}
                    className="custom_download_icons"
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default _Form;
