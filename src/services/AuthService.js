import AxiosRequest from "../configs/AxiosRequest";

const AuthService = {};

AuthService.loginUsingUsername = (payload) =>
  AxiosRequest.post("/api/v1/user/auth/login/", payload, {
    extraParams: { responseMsg: "Logged in successfully" },
  });

AuthService.sendOTP = (payload) =>
  AxiosRequest.post("noauth-api/v1/login/user", payload, {
    extraParams: { responseMsg: "OTP sent successfully" },
  });

AuthService.changePassword = (userId, payload) =>
  AxiosRequest.post(`/api/v1/user/users/${userId}/change_password/`, payload, {
    extraParams: { responseMsg: "Password Changed successfully" },
  });

AuthService.resetPassword = (userId, payload) =>
  AxiosRequest.post(`/api/v1/user/users/${userId}/reset_password/`, payload, {
    extraParams: { responseMsg: "Password Changed successfully" },
  });

AuthService.verifyOTP = (payload) =>
  AxiosRequest.post("/api/v1/user/auth/verify_otp/", payload, {
    extraParams: { responseMsg: "OTP Verified successfully" },
  });

AuthService.authPing = () => AxiosRequest.get("/api/v1/user/auth/ping/");

export default AuthService;
