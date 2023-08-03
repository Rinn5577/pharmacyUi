import { AxiosError } from "axios";
import { ResponseNotification } from "../types/ResponseNotification";


export const apiResponseFormatter = (err: AxiosError) => {
  let newResponse = {} as ResponseNotification;
  newResponse.code = err.code;
  newResponse.message = err.message;
  newResponse.response = err.response?.data;
  newResponse.status = err.status;
  newResponse.show = true;
  return newResponse;
};

export const favoriteResponseFormatter = (wasAdded:boolean) => {
  let newResponse = {} as ResponseNotification;
  newResponse.response = (wasAdded ? "Favorite added" : "Favorite not added")
  newResponse.show = true;
  newResponse.status = (wasAdded ? 200 : 400)
  return newResponse
}

