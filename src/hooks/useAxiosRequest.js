// useAxiosRequest.js
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export async function makeAxiosRequest(method, urlPath, data, params, token, dispatch, signal) {
    try {
        const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

        const headers = {
            ...(data instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };

        const response = await axios({
            method,
            url: `${baseUrl}/api/v1${urlPath}`,
            data,
            params,
            headers,
            signal,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 401 && dispatch) {
                // Dispatch logout action if needed
                // dispatch(logout());
            }
            throw error.response?.data?.message || error.message;
        }
        throw error;
    }
}

const useAxiosRequest = () => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortControllerRef = useRef(null);

    const execute = async (method, urlPath, data = null, params = null) => {
        // Cancel previous request if exists
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const result = await makeAxiosRequest(
                method,
                urlPath,
                data,
                params,
                token,
                dispatch,
                abortController.signal
            );

            if (!abortController.signal.aborted) {
                setResponse(result);
            }
            return result;
        } catch (err) {
            if (!abortController.signal.aborted) {
                setError(err.message || 'Request failed');
            }
            throw err;
        } finally {
            if (!abortController.signal.aborted) {
                setLoading(false);
            }
            abortControllerRef.current = null;
        }
    };

    // Cleanup pending requests on unmount
    useEffect(() => () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    }, []);

    return { execute, response, loading, error };
};

export default useAxiosRequest;