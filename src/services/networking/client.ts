import Axios from 'axios';

export const client = Axios.create({
  baseURL: 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
