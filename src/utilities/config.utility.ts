import { IConfig } from "./interfaces/config.interface";


const configEnv: IConfig = {
  environment: process.env.REACT_APP_ENV || 'development',
  urlLogin: ''
}

export default configEnv;