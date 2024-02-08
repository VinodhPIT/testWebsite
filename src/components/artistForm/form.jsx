import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { countryList } from "@/constants/coutry";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";



const _Form = () => {
  const [state, setState] = useState({
    isShown: false,
  });

const router = useRouter()

const { t } = useTranslation();
const validationSchema = Yup.object().shape({
  name: Yup.string().required(t("common:joinartistPage.Name is required")),
  email: Yup.string().email("Invalid email").required(t("common:joinartistPage.Email is required")),
  location: Yup.string().required(t("common:joinartistPage.Country field is required")),


    city: Yup.string()
    .required(t("common:joinartistPage.location must be at least 2 characters"))
      .min(2, t("common:joinartistPage.Too Short")),
  

    instagram: Yup.string()
    .required(t("common:joinartistPage.instagram must be at least 2 characters"))
    .min(2, t("common:joinartistPage.Too Short")),
  
  
});

  const onSubmit = () => {
    router.push('/')
  };

  return (
  <div class="form_right_wrap">
    <div style={{ margin: "0 auto", padding: "0px" }}>
      {state.isShown === false ? (
        <div>
        <h4>{t("common:joinartistPage.Enter details")}</h4>

        <Formik
          initialValues={{
            name: "",
            email: "",
            city: "",
            instagram: "",
            location: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
           
          
            fetch(
              `${process.env.apiDomain}/api/profile/artist/verification/request`,
              {
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
              }
            )
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
            <Form class="form_floating">
              <div class="form_block">
                <div className="form_group">
                  {/* <label>Email:</label> */}
                  <Field
                    type="name"
                    name="name"
                    placeholder=""
                    className="form_control"
                  />
                  <label for="name" class="required">
                  {t("common:joinartistPage.FirstName")}
                  </label>
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              </div>
              <div class="form_block">
                <div className="form_group">
                  {/* <label>Email:</label> */}
                  <Field
                    type="email"
                    name="email"
                    placeholder=""
                    className="form_control"
                  />
                  <label for="your e-mail" className="required">
                  {t("common:joinartistPage.Your e-mail")}
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div class="form_block">
                <div className="form_group">
                  <div className="form_selec_wrap">
                    <Field
                      component="select"
                      id="location"
                      name="location"
                      className="form_control_select"
                    >
                      <option value="">{t("common:joinartistPage.Country")}</option>
                      {countryList.map((option) => (
                        <option key={option.country} value={option.country}>
                          {option.title}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div class="form_block">
                <div className="form_group">
                  {/* <label>Message:</label> */}
                  <Field
                    type="city"
                    name="city"
                    placeholder=""
                    className="form_control"
                  />
                  <label for="City" className="required city">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.7568 2.12671C8.88684 2.12671 5.75684 5.25671 5.75684 9.12671C5.75684 14.3767 12.7568 22.1267 12.7568 22.1267C12.7568 22.1267 19.7568 14.3767 19.7568 9.12671C19.7568 5.25671 16.6268 2.12671 12.7568 2.12671ZM12.7568 11.6267C11.3768 11.6267 10.2568 10.5067 10.2568 9.12671C10.2568 7.74671 11.3768 6.62671 12.7568 6.62671C14.1368 6.62671 15.2568 7.74671 15.2568 9.12671C15.2568 10.5067 14.1368 11.6267 12.7568 11.6267Z"
                        fill="#707070"
                      ></path>
                    </svg>
                    {t("common:joinartistPage.City")}
                  </label>
                  <ErrorMessage name="city" component="div" className="error" />
                </div>
              </div>
              <div class="form_block">
                <div className="form_group">
                  {/* <label>Message:</label> */}
                  <Field
                    type="instagram"
                    name="instagram"
                    placeholder=""
                    className="form_control"
                  />
                  <label for="Your instagram">
                  {t("common:joinartistPage.Your instagram")}
                  </label>
                  <ErrorMessage
                    name="instagram"
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
                    disabled={isSubmitting}
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
      ) : 
          <div class="form_submit_block">
            <Image
              src="/success-tick.svg" 
              width={81}
              height={81}
              priority
              alt="Form submitted" 
            />
             <h4>{t("common:Form submitted")}</h4>
            <p>
            {t("common:Thank you")}
            </p>
            <button
              type="submit"
              class="btn_outline_secondary w_100pc h_48 hidden"
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
      }
    </div>
    </div>
  );
};

export default _Form;