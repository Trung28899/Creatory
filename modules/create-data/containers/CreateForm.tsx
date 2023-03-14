import React from "react";
import classes from "./CreateForm.module.scss";
import Input from "@/modules/common/components/Input/Input";
import Button from "@/modules/common/components/Button/Button";
import { Data, dataInitialValues } from "../types/CreateDataTypes";
import { useFormik } from "formik";
import { validateCreateForm } from "../utils/validation_helpers";
import useHandleErrors from "@/modules/create-data/hooks/useHandleErrors";
import { addData } from "../api/api";
import { toastError, toastSuccess } from "@/modules/common/utils/toast_helper";
import useLoading from "@/modules/common/hooks/useLoading";

function CreateForm() {
  const { errors, setErrors, resetError } = useHandleErrors();
  const { startLoading, endLoading } = useLoading();

  async function handleOnSubmit(values: Data) {
    startLoading();
    const errors = await validateCreateForm(values);
    if (errors !== dataInitialValues) return setErrors(errors);

    try {
      await addData(values);
      formik.resetForm();
      toastSuccess("Data added successfully");
    } catch (error) {
      console.log(error);
      toastError("An error has occured");
    }
    endLoading();
  }

  const formik = useFormik({
    initialValues: dataInitialValues,
    onSubmit: handleOnSubmit,
  });

  return (
    <form className={classes.container} onSubmit={formik.handleSubmit}>
      <p className={classes.title}>Create Data</p>
      <Input
        placeholder="Enter name"
        id="name"
        variant="outline"
        error={errors.name}
        resetError={resetError}
        {...formik.getFieldProps("name")}
      />
      <Input
        placeholder="Enter password"
        id="password"
        type="password"
        variant="outline"
        error={errors.password}
        resetError={resetError}
        {...formik.getFieldProps("password")}
      />
      <Input
        placeholder="Enter phone"
        id="phone"
        variant="outline"
        error={errors.phone}
        resetError={resetError}
        {...formik.getFieldProps("phone")}
      />
      <Input
        placeholder="Enter email"
        id="email"
        variant="outline"
        error={errors.email}
        resetError={resetError}
        {...formik.getFieldProps("email")}
      />

      <Button
        variant="pink"
        size="medium"
        type="submit"
        className={classes.button}
      >
        Sign In
      </Button>
    </form>
  );
}

export default CreateForm;
