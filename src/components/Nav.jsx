import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="">
            <Grid templateColumns='repeat(2,1fr)'>

                <GridItem >
                    <Link to="/" >
                        <Text fontSize='2xl'
                            fontWeight='bold'
                        >
                            That's<Box color='brand.900' as="span"> Clearly Wealth! </Box>
                        </Text>
                    </Link>
                </GridItem>

                <GridItem >
                    <Link to="/Words">
                        Definitions
                    </Link>
                </GridItem>
            </Grid>
        </nav>
    );
}

export default Nav;