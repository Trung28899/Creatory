"use client";
import React from "react";
import classes from "./AuthForm.module.scss";
import Input from "@/modules/common/components/Input/Input";
import { useFormik } from "formik";
import AuthTypes, { authInitialValues } from "../types/AuthTypes";
import Button from "@/modules/common/components/Button/Button";
import { validateAuthForm } from "../utils/validation_helpers";
import useHandleErrors from "../hooks/useHandleErrors";
import { toastError } from "@/modules/common/utils/toast_helper";
import { authenticateUser } from "../api/api";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authenticate } from "@/store/reducers/authReducer";
import useLoading from "@/modules/common/hooks/useLoading";

function FormContainers() {
  const { errors, setErrors, resetError } = useHandleErrors();
  const router = useRouter();
  const dispatch = useDispatch();
  const { startLoading, endLoading } = useLoading();

  async function handleOnSubmit(values: AuthTypes) {
    startLoading();
    const errors = await validateAuthForm(values);
    if (errors !== authInitialValues) return setErrors(errors);

    try {
      await authenticateUser(values);
      dispatch(authenticate());
      router.push("/view-data");
    } catch (error: any) {
      const errorMessage = error.response?.data?.errorDetails || "";
      if (errorMessage) return toastError(errorMessage);
      toastError("An error has occured");
    }
    endLoading();
  }

  const formik = useFormik({
    initialValues: authInitialValues,
    onSubmit: handleOnSubmit,
  });

  return (
    <form className={classes.container} onSubmit={formik.handleSubmit}>
      <p className={classes.title}>Account Login</p>
      <Input
        placeholder="Enter username"
        id="username"
        error={errors.username}
        resetError={resetError}
        {...formik.getFieldProps("username")}
      />
      <Input
        placeholder="Enter passsword"
        id="password"
        error={errors.password}
        resetError={resetError}
        {...formik.getFieldProps("password")}
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

export default FormContainers;
