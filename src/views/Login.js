import React from "react";
import AuthService from "../services/AuthService";

export default function Login() {
  let values = {
    // send your req body
  };

  const onLogin = () => {
    AuthService.sendOTP(values).then((res) => {
      // do whatever you want
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          height: 60,
          borderRadius: 20,
          width: 300,
          backgroundColor: "red",
          color: "#fff",
          border: "1px solid red",
          fontSize: 20,
          fontWeight: "initial",
        }}
        onClick={onLogin}
      >
        Click here for TEST AxiosReq
      </button>
    </div>
  );
}
