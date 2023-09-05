import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <>
      <h1>Something went wrong</h1>
      <h3>
        {status} - {statusText}
      </h3>
    </>
  );
};
export default Error;
