import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs"
const Form = () => {
    const [userInput, setUserInput] = useState('');
    const [submit, setSubmit] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        !submit ?
            setSubmit(true) :
            setSubmit(false)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea type="input" id="input-box"
                placeholder=' Enter Financial term ex:Stocks'
                required
                value={userInput}
                onChange={
                    (e) =>
                        setUserInput(e.target.value)
                }
            />

            <button className="BsArrow-btn">
                <BsArrowLeftRight className="BsArrow" size={20} />
            </button>

            <textarea id="output-box"
                placeholder=' outPut here'
                readOnly
                value={''}
            />
        </form>
    );
}

export default Form;