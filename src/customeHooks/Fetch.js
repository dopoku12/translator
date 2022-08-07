import { useEffect, useState } from "react";

const useFetchApi = () => {
    const [outPut, setoutPut] = useState([])
    const [pending, setPending] = useState(true)
    const [errorHandler, setErrorHandler] = useState(null)

    useEffect(
        () => {

            fetch('http://localhost:8000/DMV')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Something went wrong')
                    }
                    console.log(res);
                    return res.json()
                }
                )
                .then(jsonData => {
                    setoutPut(jsonData)
                    setPending(false)
                })
                .catch(err => {
                    setErrorHandler(err.message)
                })
        }, []);

    console.log('setData:', outPut);

    return { outPut, pending, errorHandler, }
}

export default useFetchApi;