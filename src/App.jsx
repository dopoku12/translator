import { useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react'

import { Routes, Route } from 'react-router-dom';
// import Form from "./Form";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Words from "./pages/Words";
function App() {


  return (
    <ChakraProvider>
      <div >
        <Nav />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Words" element={<Words />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
