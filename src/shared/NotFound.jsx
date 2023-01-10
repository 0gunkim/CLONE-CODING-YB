import { useRouteError } from "react-router-dom";
export const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>NotFound!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
