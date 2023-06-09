import * as yup from "yup";

const getValidationErrors = (error: yup.ValidationError) => {
  const errorObject: { [key: string]: string } = {};
  error.inner.forEach((e: yup.ValidationError) => {
    if (e.path) errorObject[e.path] = e.message;
  });
  return errorObject;
};

export { getValidationErrors };
