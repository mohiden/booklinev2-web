import axios from "axios";
export * from './queries';

export const Api = axios.create({
    baseURL: "https://bookline-rest.herokuapp.com/api/",
    headers: {
        'Authorization': window.localStorage.getItem('token') ?? "",

    },

});

