import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="">
            <Grid templateColumns='repeat(2,1fr)'>

                <GridItem >
                    <Link to="/" >
                        <Heading fontSize='3xl'>
                            That's Clearly Wealth!
                        </Heading>
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