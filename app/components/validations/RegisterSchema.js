import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required("Name is required ").label("Name"),
  email: yup
    .string()
    .min(9)
    .email()
    .max(2255)
    .required("Email is required ")
    .label("Email"),
  password: yup
    .string()
    .min(5)
    .max(255)
    .required("Password is required ")
    .label("Password"),
});
