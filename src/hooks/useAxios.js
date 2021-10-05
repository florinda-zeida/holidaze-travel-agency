import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const url = "https://enigmatic-atoll-04292.herokuapp.com";

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const jwt = auth.jwt;
		config.headers.Authorization = jwt ? `Bearer ${jwt}` : "";
		return config;
	});

	return apiClient;
}
