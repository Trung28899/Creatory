import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { startLoading, completeLoading } from "@/store/reducers/loadingReducer";

const useLoading = () => {
  const dispatch = useDispatch();

  const startLoadingCallback = useCallback(() => {
    dispatch(startLoading());
  }, [dispatch]);

  const completeLoadingCallback = useCallback(() => {
    dispatch(completeLoading());
  }, [dispatch]);

  return {
    startLoading: startLoadingCallback,
    endLoading: completeLoadingCallback,
  };
};

export default useLoading;
