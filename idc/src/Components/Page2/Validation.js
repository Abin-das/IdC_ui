// export default function Validation(values) {
//   const errors = {};
//   const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const password_pattern = /^[A-Z]*$/;
//   if (values.name === "") {
//     errors.name = "Name is Required!";
//   }
//   if (values.email === "") {
//     errors.email = "email is required!";
//   } else if (email_pattern.test(values.email)) {
//     errors.email = "Email didnt match";
//   }
//   if (values.password === "") {
//     errors.password = "Password Required";
//   } else if (!password_pattern.test(values.password)) {
//     errors.email = "Password didnt match";
//   }

//   return errors;
// }
