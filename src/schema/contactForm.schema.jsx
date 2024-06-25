import * as Yup from "yup";

export const initialValues = {
  tattooType: "",
  email: "",
  message: "",
};

export let schemaValidator = (t) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("common:contactUsPage.Invalid email"))
      .required(t("common:contactUsPage.Email is required")),
    message: Yup.string().required(
      t("common:contactUsPage.Message is required")
    ),
    tattooType: Yup.string().required(
      t("common:contactUsPage.Please select one option")
    ),
  });

  return validationSchema;
};
