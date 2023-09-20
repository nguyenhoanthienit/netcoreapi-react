import axiosClient from "./axiosClient";

const END_POINT = {
    TODOS: "todos"
}

export const getTodosApi = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}