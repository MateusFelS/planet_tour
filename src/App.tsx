import Main from "./pages/Main";
import Slidenav from "./components/Slidenav";
import Destination from "./pages/Destination";
import { Divider } from "@mui/material";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryDetails from "./pages/Details";
import Footer from "./components/Footer";
import Checkout from "./pages/CheckoutForm";

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={
            <>
              <Slidenav />
              <Main />
              <Destination />
              <Divider sx={{
                borderBottomWidth: '2px', 
                borderColor: 'black'
              }}/>
              <AboutUs />
              <Contacts />  
              <Footer />  
            </>
          } />
          <Route path="/country/:countryId" element={<CountryDetails />} />
          <Route path="/checkout/:countryId" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
