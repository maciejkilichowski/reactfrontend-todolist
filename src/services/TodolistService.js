import axios from "axios";

const TODOLIST_API_BASE_URL = "http://localhost:8080/todo";
class TodolistService {
    getTododata(){
        return axios.get(TODOLIST_API_BASE_URL);
    }
}

export default new TodolistService()