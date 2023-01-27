import useData from './Data'
const Display = () => {
    const { words, setDmvDef, init } = useData()

    return (
        <ul className="collapsible popout ">{
            words.map((i) => {
                // const init = () => {
                //     console.log('init func:',
                //         i.statues ?
                //             { ...i, statues: false }
                //             : { ...i, statues: true }
                //     )
                // }
                return (
                    <li className="" key={i.id}>

                        <h4 className="collapsible-header">
                            {i.term}
                        </h4>

                        <div className="collapsible-body">
                            <blockquote>
                                <p>
                                    {i.statues ? i.definition : i.dMVDefinition}
                                </p>
                            </blockquote>
                            <div className="switch" onClick={() => init(i.id)}
                            >
                                <label>
                                    <span className="types">
                                        {i.standard}
                                    </span>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                    <span className="types">
                                        {i.dmv}
                                    </span>
                                </label>
                            </div>
                            <br />
                            <br />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Display;