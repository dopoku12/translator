const Display = ({ dmvDef, convertFun }) => {
    return (
        <ul className="collapsible popout">{
            dmvDef.map((i) => {
                return (
                    <li key={i.id}>
                        <h4 className="collapsible-header">
                            {i.term}
                        </h4>
                        <div className="collapsible-body">
                            <p>
                                {i.statues ? i.definition : i.dMVDefinition}

                                {

                                    // <label className="switch">
                                    // <input type='checkbox' id="check"
                                    // className="toggle"
                                    // onClick={() => convertFun(i.id)} />
                                    // <span class="slider round">
                                    // </span>
                                    // </label>
                                }
                                <br />
                                <br />
                                {
                                    i.statues ? i.dmv : i.standard
                                }
                            </p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Display;