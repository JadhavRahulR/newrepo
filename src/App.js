import React, { useState } from "react";
import About from "./Component/About";
import FormText from "./Component/FormText";
import Navbar from "./Component/Navbar";
import {Routes,Route} from 'react-router-dom';
import"./index.css"

const App = () => {
    const [mode ,setMode] = useState('light');

const toggleMode = () => {
if(mode ==='light')
    {
        setMode('dark');
        document.body.style.backgroundColor ="#41464b";
    }
    else
    {
        setMode('light'); 
        document.body.style.backgroundColor = "white";
    }
}

return(
<>

<Navbar
title="TextUtils"
mode = {mode}
toggleMode = {toggleMode}
/>

<Routes>
    <Route exact path = "/" element={<FormText mode = {mode}/>}></Route>
    <Route exact path="/about" element = {<About mode={mode}/>}></Route> 
</Routes> 


</>
)
}
export default App;