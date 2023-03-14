import { useState, useCallback } from "react";
import { Data, dataInitialValues } from "../types/CreateDataTypes";

const useHandleErrors = () => {
  const [errors, setErrors] = useState<Data>(dataInitialValues);
  const resetError = useCallback(() => setErrors(dataInitialValues), []);

  return {
    errors,
    setErrors,
    resetError,
  };
};

export default useHandleErrors;
