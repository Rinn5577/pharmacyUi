import { AxiosError } from "axios";
import { ApiResponse } from "../types/utils";

export const newErrorResponse = (err: AxiosError) => {
  let newError = {} as ApiResponse;
  newError.code = err.code;
  newError.message = err.message;
  newError.response = err.response?.data;
  newError.status = err.status;
  newError.show = true;
  return newError;
};
