import api from '@api';

export const Delete = (key) => {
    return api.delete('/user/delete/' + key)
}
