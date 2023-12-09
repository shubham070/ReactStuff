import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div> oops something went Wrong !! </div>
      <h3> {error}</h3>
    </div>
  );
};

export default ErrorPage;
