import axios from 'axios';
import Config from '@config';
import { storeToken } from '@utils/auth';
// import { fromJson, toJson } from '@utils/json';

let normalAxios = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }  
});

export default normalAxios;
