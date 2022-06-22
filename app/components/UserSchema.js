import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(5, "Password should be more than 5 character")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesnot match")
    .required("Confirm Password is required"),
});
