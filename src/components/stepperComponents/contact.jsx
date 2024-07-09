import React, { useState, useEffect, useRef } from "react";

import useTranslation from "next-translate/useTranslation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { useRequestForm } from "@/store/requestManagement/requestForm";
import {useCountryCode} from "@/store/countryCode/getcountryCode";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const { t } = useTranslation();

  const {
    setEmail,
    setPhone,
    setCountryCode,
    nextPage,prevPage,
    email: storedEmail,
    phone: storedPhone,
    checkUserExists
  } = useRequestForm(); // Zustand setters

  const {
    fetchCountryCodelists,
    getCountryCodeList,
    getSingleCountryCode,
    countrycode,
  } = useCountryCode(); // Zustand setters

  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleCountryChange = (selectedOptions) => {
    getSingleCountryCode(selectedOptions.label);
  };

  const handleCountryFocus = () => {
    if (emailInputRef.current || phoneInputRef.current) {
      emailInputRef.current.blur();
      phoneInputRef.current.blur();
    }
  };


  const handleSubmit = async (values) => {
    setLoader(true);

    const updatedValues = {
      ...values,
      phone: countrycode.split("+")[1].trim() + values.phone,
    };
 
    setEmail(values.email);
    setPhone(values.phone);
    setCountryCode(countrycode.split("+")[1].trim())

    const res = await axiosInstance.get(API_URL.SEARCH.REQUEST_CONTACT(updatedValues));
    const { exists } = res.data;

    setLoader(false);
    checkUserExists(exists);

    nextPage();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("common:contactUsPage.Invalid email")).matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, t("common:contactUsPage.Email is required")),
      phone: Yup.string().matches(
      /^[0-9()+\- ]+$/,
      t("common:contactUsPage.InvalidNumber")
    ),
  });

  useEffect(() => {
    fetchCountryCodelists();
  }, []);

  const options = getCountryCodeList.map((country, index) => ({
    value: index,
    label: `${country.countryGoogleId} ${country.countryCode}`,
    key: country.countryId,
  }));

  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content m_align_content">
              <section className="request_landing_content mb_90 m_mb_0">
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
                              innerRef={emailInputRef} // Assign the ref
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault(); // Prevent form submission on Enter
                                  e.target.blur();    // Dismiss the keyboard
                                
                                }
                              }}
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

                            <div style={{ display: "flex", gap: "8px" }}>
                              <Dropdown
                                options={options}
                                value={countrycode}
                                onChange={handleCountryChange}
                                onFocus={handleCountryFocus} // Blur email input field on focus
                              >
                                {options.map((option) => (
                                  <option key={option.key} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Dropdown>

                              <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className="form_control"
                                placeholder="Your phone number"
                                innerRef={phoneInputRef} // Assign the ref
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault(); // Prevent form submission on Enter
                                    e.target.blur();    // Dismiss the keyboard
                                  
                                  }
                                }}
                              />
                            </div>
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="error"
                            />
                          </div>

                          <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                            <button
                              className="button_primary_outline w_min_125 m_w_50pc"
                              onClick={prevPage}
                            >
                              Back
                            </button>
                            <button
                              className="button_primary w_min_125 pull_right align_self_end m_w_50pc"
                              disabled={values.email === ""}
                              type="submit"
                            >
                              {t("common:next")}

                              {loader && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          </div>
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
