// useAxiosRequest.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import your logout action (adjust the path as needed)
import { logout } from "../redux/authSlice";

export async function makeAxiosRequest(method, urlPath, data, params, token, dispatch) {
    try {
        const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

        const headers =
            data instanceof FormData
                ? {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                }
                : {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                };

        const response = await axios({
            method,
            url: `${baseUrl}/api/v1${urlPath}`,
            data,
            params,
            headers,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 401 && dispatch) {
                    // If unauthorized, dispatch a logout action
                    dispatch(logout());
                }
                throw error.response;
            } else if (error.request) {
                throw error.request;
            } else {
                throw new Error(`Error: ${error.message}`);
            }
        } else {
            throw error;
        }
    }
}

const useAxiosRequest = (method, urlPath, data = null, params = null, deps = []) => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!urlPath) return;

        let isCancelled = false;
        setLoading(true);

        const fetchData = async () => {
            try {
                const result = await makeAxiosRequest(method, urlPath, data, params, token, dispatch);
                if (!isCancelled) {
                    setResponse(result);
                    setError(null);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err);
                    setResponse(null);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [method, urlPath, data, params, token, dispatch, ...deps]);

    return { response, loading, error };
};

export default useAxiosRequest;
