import React, { useState,useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                if (!res) {
                    setError("Failed to fetch");
                }
                const result = await res.json();
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);

            }
        }

        fetchData();
    },[url])
    return {
        data,
        error,
        loading,
    };
}

export default useFetch