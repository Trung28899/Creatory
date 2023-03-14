import * as Yup from "yup";
import { getValidationErrors } from "@/modules/common/utils/validation_helpers";
import { Data, dataInitialValues } from "../types/CreateDataTypes";

const vietnameseRegex1 = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
const vietnameseRegex2 = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/;
const vietnamesRegex3 =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const vnNumberRegex = vietnameseRegex1 || vietnameseRegex2 || vietnamesRegex3;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(1000, "Name must be less than 1000 characters")
    .required("Name is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(vnNumberRegex, "Invalid Vietnamese phone number")
    .required("Phone number is required"),
});

const validateCreateForm = async (values: Data) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
  } catch (error: any) {
    const errorObject = getValidationErrors(error);
    return { ...dataInitialValues, ...errorObject };
  }
  return dataInitialValues;
};

export { validationSchema, validateCreateForm };
