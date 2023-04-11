import { Button } from "@chakra-ui/react";
import AboutMe from "./AboutMe";
const Home = () => {
    return (
        <div cl>
            <main className="row">
                <div className="col s1">
                    <Button variant={'neo'}>
                        hello world
                    </Button>
                    <div className="col s1">
                    </div>

                </div>
            </main>
            <footer>
                <AboutMe />
            </footer>
        </div>
    );
}

export default Home;