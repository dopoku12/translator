import { Box, Button, } from "@chakra-ui/react";
import { FaDollarSign } from 'react-icons/fa'
import AboutMe from "./AboutMe";
const Home = () => {
    return (
        <div >
            <main className="row">
                <div className="col s1">

                    <FaDollarSign size={350}
                        viewBox="0 -10 288 610"
                        stroke="green"
                        filter="drop-shadow(13px 13px 0px green)"
                        color="white"
                        strokeWidth={10}
                    />

                </div>
                <Button variant={'neo'}>
                    hello world
                </Button>
            </main>
            <footer>
                <AboutMe />
            </footer>
        </div>
    );
}

export default Home;