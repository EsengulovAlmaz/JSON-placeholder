import { instance } from "../config/config";


export const BASE_REQUEST = (route) => instance.get(route);