import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Articles from "./pages/Articles";
import Contacts from "./pages/Contacts";

import Home from './pages/Home'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/articles" element={ <Articles /> }/>
        <Route path="/contacts" element= { <Contacts />} />
      </Routes>
    </Router>
  )
}