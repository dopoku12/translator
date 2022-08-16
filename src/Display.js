const Display = ({ dmvDef, convertFun }) => {
    return (
        <ul>{
            dmvDef.map((i) => {
                return (
                    <li className="words" key={i.id}>
                        <p>
                            <h1>
                                {i.term}
                            </h1>
                            {i.statues ? i.definition : i.dMVDefinition}
                            <br />
                            <br />
                            <label className="switch">
                                <input type='checkbox' id="check"
                                    className="toggle"
                                    onClick={() => convertFun(i.id)} />
                                <span class="slider round">
                                </span>
                            </label>
                            <br />
                            {
                                i.statues ? i.dmv : i.standard
                            }
                        </p>
                    </li>
                )
            })}

        </ul>
    )
}

export default Display;