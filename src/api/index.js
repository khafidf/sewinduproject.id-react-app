import axios from "axios";

const headers = {
	Accept: "application/json",
	"Content-type": "application/json",
};

const api = axios.create({
	baseURL: "http://localhost:3030/api",
	headers,
});

export default api;
