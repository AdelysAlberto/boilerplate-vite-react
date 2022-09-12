import request from "../infra/request"
import configEnv from '../utilities/config.utility';
import { setStorage } from "../infra/store/localStorage";

const loginUser = async (payload: any) => {
  try {

    const { data, statusText } = await request.post(configEnv.urlLogin, payload);
    if (statusText) return { statusText };
    setStorage('userStorage', data);
    return data;

  } catch (e) {
    return { statusText: e }
  }
}

export {
  loginUser
}