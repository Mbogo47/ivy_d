import * as yup from "yup";

export const signInSchema = yup.object().shape({
  username: yup.string().required("Username Required").email("Invalid username address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid username address"),
  password: yup.string().required("Password Required")
    .min(6, "Password must be at least 6 characters"),
});

export const signupSchema = yup.object().shape({
  // name: yup.string().required("Name Required")
  //   .min(4, "Name must be at least 4 characters"),
  email: yup.string().required("Email Required").email("Invalid email address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address"),
  password: yup.string().required("Password Required")
    .min(6, "Password must be at least 6 characters"),
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup.string().required("Email Required").email("Invalid email address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address")
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().required("Password Required")
    .min(6, "Confirm Password must be at least 6 characters"),
  confirmPassword: yup.string().required("Confirm Password Required")
    .oneOf([yup.ref("password"), null], "Confirm Password does not match")
})

export const EditProfileSchema = yup.object().shape({
  fname: yup.string().required("First Name Required")
    .min(3, "First Name must be at least 3 characters"),
  lname: yup.string().required("Last Name Required")
    .min(3, "Last Name must be at least 3 characters"),
})