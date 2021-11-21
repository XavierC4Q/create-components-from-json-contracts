import { useEffect } from "react";
import Form from "../components/Form";
import useData from "../hooks/useData";

function Login() {
  const { response, loading, error, getRequest, postRequest } = useData({
    namespace: "login-page",
  });

  useEffect(() => {
    getRequest({ path: "forms/login" });
  }, []);

  if (!response || loading || error) return null;

  console.log("res", response);

  return <div>Login</div>
//   return <Form id="login-form" />;
}

export default Login;
