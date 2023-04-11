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
                            <AccordionItem border='none'>

                                <AccordionButton
                                    marginTop={10}
                                    borderRadius='10px'
                                    border='2px'
                                    borderStyle='solid'
                                    borderColor='brand.900'
                                    boxShadow='5px 5px #4caf50'
                                    zIndex='-1px' >

                                    <Heading color={'brand.900'}>
                                        {i.term}
                                    </Heading>
                                </AccordionButton>

                                <AccordionPanel
                                    margin={5}
                                    border='2px'
                                    borderStyle='solid'
                                    borderColor='brand.900'
                                    boxShadow='5px 5px #4caf50'
                                    zIndex='-1px'
                                >
                                    <Box >
                                        <Text color={'brand.900'}>
                                            {i.statues ? i.definition : i.dMVDefinition}
                                        </Text>

                                        <FormControl marginTop={5}>
                                            <FormLabel color='brand.900' htmlFor='terms' >
                                                {i.standard}
                                                <Switch id='terms' colorScheme='green' />
                                                {i.dmv}
                                            </FormLabel>
                                        </FormControl>

                                    </Box>
                                </AccordionPanel>


                            </AccordionItem>
                        </Accordion>
                    )
                })}
        </Container >
    )
}

export default Display;