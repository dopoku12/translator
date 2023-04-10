import { useEffect } from 'react'
import useData from '../components/Data'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
const Display = () => {
    const { words, init } = useData()


    return (
        <div className="container">
            <ul className=" li-contain  collapsible popout"
                data-collapsible="accordion">{
                    words.map((i) => {
                        // const init = () => {
                        //     console.log('init func:',
                        //         i.statues ?
                        //             { ...i, statues: false }
                        //             : { ...i, statues: true }
                        //     )
                        // }
                        return (
                            <li className="words-contain " key={i.id}>

                                <h4 className=" collapsible-header waves-effect waves-green neo-button green-text  ">
                                    {i.term}
                                </h4>

                                <div className="collapsible-body neo-button">
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
        </div>
    )
}

export default Display;