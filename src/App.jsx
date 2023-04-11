import { ChakraProvider, extendTheme, ComponentStyleConfig } from '@chakra-ui/react'
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
// import Form from "./Form"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Words from "./pages/Words";



const theme = extendTheme({

  colors: {
    brand: {
      900: "#4caf50",
    },
  },
  components: {
    Button: {
      variants: {
        'neo': {
          textColor: '#4caf50',
          border: '1px',
          borderStyle: 'solid',
          borderColor: '#4caf50',
          boxShadow: '5px 5px #4caf50',
          zIndex: '-1px',
        },
      },
    }
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
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
