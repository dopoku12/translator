import useFetchApi from "./customeHooks/Fetch";
const Display = () => {
    const { pending, errorHandler, outPut } = useFetchApi()
    const listItems = outPut.map((i) => {
        return (
            <li key={i.id}>

                <h1>{i.term}:</h1>
                <p>{i.definition}</p><br />

            </li>
        )
    }
    )
    return (
        <ul>
            {pending && <h1>...Loading</h1>}
            {
                listItems
            }

            <h1>{errorHandler}</h1>

        </ul>
    )
}

export default Display;