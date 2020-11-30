import api from '@api';
import Login from '../containers/Login';

export const LoginApi = (params) => {
    return api.post('/user/login', params)
}
