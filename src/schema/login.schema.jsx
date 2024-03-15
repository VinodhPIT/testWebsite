import * as Yup from "yup";

export const loginInitialValues = {
  username: "",
  password: "",
};

export let schemaValidator = (t) => {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required(
      t("common:AnalyticLogin.User name is required")
    ),
    password: Yup.string().required(
      t("common:AnalyticLogin.Password is required")
    ),
  });

  return LoginSchema;
};
