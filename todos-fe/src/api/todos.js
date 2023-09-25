import axiosClient from "./axiosClient";

const END_POINT = {
    TODOS: "todos"
}

export const getTodosApi = () => {
    return axiosClient.get(`${END_POINT.TODOS}`);
}

export const deleteTodosAPI = (id) => {
    return axiosClient.delete(`${END_POINT.TODOS}/${id}`);
}

export const addTodosAPI = (todo) => {
    return axiosClient.post(`${END_POINT.TODOS}`, todo);
}

export const editTodosAPI = (todo) => {
    return axiosClient.put(`${END_POINT.TODOS}`, todo);
}