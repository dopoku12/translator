import { useEffect } from 'react'
import useData from '../components/Data'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box, Container,
    FormControl, FormLabel,
    Heading,
    Switch,
    Text,
} from '@chakra-ui/react'
const Display = () => {
    const { words, init } = useData()


    return (
        <Container >
            {
                words.map((i) => {
                    return (
                        <Accordion allowToggle key={i.id}>
                            <AccordionItem >

                                <AccordionButton className="neo-button" >

                                    <Heading color={'green.500'}

                                    >
                                        {i.term}
                                    </Heading>

                                </AccordionButton>

                                <AccordionPanel className='neo-panel'>
                                    <Box >
                                        <Text color={'green.500'}>
                                            {i.statues ? i.definition : i.dMVDefinition}
                                        </Text>

                                        <FormControl>
                                            <FormLabel htmlFor='terms' >
                                                {i.standard}
                                                <Switch id='terms' color='brand.900' />
                                                {i.dmv}
                                            </FormLabel>
                                        </FormControl>

                                    </Box>
                                </AccordionPanel>
                                <br />
                                <br />

                            </AccordionItem>
                        </Accordion>
                    )
                })}
        </Container>
    )
}

export default Display;