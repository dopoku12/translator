
const Display = ({ dmvDef, convertFun }) => {
    return (
        <ul>{
            dmvDef.map((i) => {
                return (
                    <li key={i.id}>
                        <h1>
                            {i.term}
                        </h1>
                        <p>
                            {i.statues
                                ?
                                i.definition
                                :
                                i.dMVDefinition
                            }
                        </p>
                        {
                            <button className=".BsArrow-btn " onClick={() => convertFun(i.id)}>
                                <h2>
                                    {
                                        i.statues ?
                                            i.dmv
                                            :
                                            i.standard
                                    }
                                </h2>
                            </button>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Display;