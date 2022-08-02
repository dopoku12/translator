import { useEffect, useState } from "react";
const useFetchApi = (userInput, submit) => {
    const [outPut, setoutPut] = useState('')
    const [pending, setPending] = useState(true)
    const [errorHandler, setErrorHandler] = useState(null)

    useEffect(
        () => {

            fetch()
                .then(res => {
                    if (!res.ok) {
                        throw Error('')
                    }
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
        }, [submit]);

    console.log('setData:', outPut);

    return { outPut, errorHandler, pending, }
}

export default useFetchApi;