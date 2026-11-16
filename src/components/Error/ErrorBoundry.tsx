import LoadingHandler from "./LoadingHandler";

import Error from "./Error";
type elements = {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error?: string
};
import type { ReactNode } from "react";
export default function ErrorBoundry({
  children,
  isLoading,
  isError,
  isSuccess,
  error,
}: elements) {
  if (isLoading) {
    return <LoadingHandler></LoadingHandler>;
  } else if (isError) {
    return (
      <Error message={error|| "خطای داخلی"}></Error>
    );
  } else if (isSuccess) {
    return children;
  }
}
