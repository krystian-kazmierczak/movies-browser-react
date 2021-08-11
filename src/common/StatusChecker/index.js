import{ Loading } from "./../Loading";
import { Error } from "./../Error";

export const StatusChecker = ({ children, isLoading, isError }) => {
  return <>{isLoading ? <Loading /> : isError ? <Error /> : children}</>;
};
