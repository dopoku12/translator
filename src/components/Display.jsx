import useData from './Data'
const Display = () => {
    const { dmvDef } = useData()
    return (
        <ul className="collapsible popout ">{
            dmvDef.map((i) => {
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
                            <div className="switch" onClick={
                                () =>
                                    i.statues ?
                                        console.log({ ...i })
                                        : { ...i, statues: true }
                            }
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