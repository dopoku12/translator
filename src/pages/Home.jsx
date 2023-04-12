import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FaDollarSign } from 'react-icons/fa'
import AboutMe from "./AboutMe";
const Home = () => {
    return (
        <div className="home">
            <main >
                <Grid templateColumns='repeat(2,1fr)'

                    gap={3}>
                    <GridItem colSpan={2}>
                        <Heading>
                            Welcome to that's  Clearly Wealth!
                        </Heading>
                    </GridItem>

                    <GridItem rowSpan={2}>
                        <Text>
                            We work on Making Financial Literacy more
                            digestible and accessible
                            because That's clearly Wealth!
                        </Text>
                    </GridItem>
                    <GridItem rowSpan={2}>
                        <FaDollarSign size={350}
                            viewBox="0 -10 288 610"
                            stroke="green"
                            filter="
                    drop-shadow(13px 13px 0px #12d39c)
                    drop-shadow(13px 13px 0px #4caf50)
                  "
                            color="white"
                            strokeWidth={5}
                        />
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Button variant={'neo'}>
                            About US
                        </Button>
                    </GridItem>
                </Grid>
            </main>
            <footer>
                <AboutMe />
            </footer>
        </div>
    );
}

export default Home;