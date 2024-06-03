import Main from "./pages/Main"
import Slidenav from "./components/Slidenav"
import Destination from "./pages/Destination"
import { Divider } from "@mui/material"
import AboutUs from "./pages/AboutUs"
import Contacts from "./pages/Contacts"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryDetails from "./pages/Details"

function App() {
  return (
    <Router>
      <div>
        <Slidenav />
        <Main />
        <Destination />
        <Divider sx={{
          borderBottomWidth: '2px', 
          borderColor: 'black'
        }}/>
        <AboutUs />
        <Contacts />    
      </div>
      <Routes>
        <Route path="/country/:countryId" element={<CountryDetails />} />
      </Routes>
    </Router>
  )
}

export default App
