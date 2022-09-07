import request from "../infra/request"
import configEnv from '../utilities/config.utility';
import { setStorage } from "../storage/localStorage";

const postLoginUserService = async (payload: any) => {
  try {

    const { data, statusText } = await request.post(configEnv.URL_loginUser, payload);
    if (statusText) return { statusText };
    setStorage('userStorage', data);
    return data;

  } catch (e) {
    return { statusText: e }
  }
}

const postRegisterUserService = async (payload: any) => {
  try {

    const { data, statusText } = await request.post(configEnv.URL_registerUser, payload);

    if (statusText) return { statusText }
    setStorage('userStorage', data);
    return data;

  } catch (e) {
    return { statusText: e }
  }
}

const postInviteService = async (payload: any) => {
  try {

    const { data, statusText } = await request.post(configEnv.URL_registerInvite, payload);

    if (statusText) return { statusText }
    return data;

  } catch (e) {
    return { statusText: e }
  }
}

export {
  postLoginUserService,
  postRegisterUserService,
  postInviteService
}