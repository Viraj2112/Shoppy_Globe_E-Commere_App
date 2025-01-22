import { useState, useEffect } from "react"

// Below here is the Custom Hook to Fetch Data from the url
function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    },[url])
    return {data, error, loading};
}

export default useFetch;