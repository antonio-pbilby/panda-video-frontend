import { AxiosError } from "axios";

export const getAxiosError = (err: AxiosError): string => {
  return (err?.response?.data as any).error.message;
}