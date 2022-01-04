import axios from "axios";
export * from './queries';
export * from './mutations';


axios.defaults.headers.common['authorization'] = window.localStorage.getItem('token') ?? "";
export const Api = axios.create({
    baseURL: "https://bookline-rest.herokuapp.com/api/",
});

