import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Page1 from './Components/Page1'
import { Route, Routes } from 'react-router-dom'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page_1 from './Components/Page_1'
import Page_2 from './Components/Page_2'
import LanguageSwitcher from './Components/LanguageChanger'

function App() {
const [diseasesData,setDieseaseData]=useState([])
return (
<>
<Navbar/>
<LanguageSwitcher/>
<Routes>
<Route path='/' element={<Page_1 setDieseaseData={setDieseaseData}/>}/>
<Route path='/page2' element={<Page_2/>}/>
<Route path='/page3' element={<Page5/>}/>
<Route path='/page4' element={<Page4 diseasesData={diseasesData}/>}/>
<Route path='/page5' element={<Page1/>}/>
<Route path='/page6' element={<Page2/>}/>
<Route path='/page7' element={<Page3/>}/>

</Routes>

</>

  )
}

export default App