import { useEffect, useState } from "react";

function useFetch <T>(url: string, initialState: T): [T, boolean] {
    const [data, setData] = useState<T>(initialState);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch(url);
                const data = await api.json();

    
                setIsPending(false);
                setData(data);
    
            } catch(err: any) {
                if(err.response) {
                    console.log(err.response.data);
                } else {
                    console.log(`Error:${err.message}`);
                }
            }
        }

        fetchData();
    }, [url])

    return [ data, isPending ];
}

export default useFetch;