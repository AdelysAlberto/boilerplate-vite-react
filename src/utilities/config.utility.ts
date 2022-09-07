import { IConfig } from "./interfaces/config.interface";


const configEnv: IConfig = {
  environment: process.env.REACT_APP_ENV || 'development',

}

export default configEnv;