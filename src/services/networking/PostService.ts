import { PostType } from '@types';
import { client } from './client';
import { AxiosResponse } from 'axios';

export const getPostsList = async () => {
  return client
    .get<undefined, AxiosResponse<PostType[]>>('/posts')
    .then(response => response.data);
};
