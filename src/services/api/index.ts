import { getHeaders } from './api.helper';
import axios from 'axios';

export const instance = axios.create({
  headers: getHeaders(),
});
