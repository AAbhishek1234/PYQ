import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import SelectCourse from './componet/SelectCourse';
import Tenth from './componet/Tenth';
import Ias from './componet/Ias';
import Cat from './componet/Cat';
import Bank from './componet/Bank';
import Gate from './componet/Gate';
import Jee from './componet/Jee';
import Neet from './componet/Neet';
import Upsc from './componet/Upsc';
import Ssc from './componet/Ssc';
import Twelfth from './componet/Twelfth';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/SelectCourse' element={<SelectCourse/>}/>
    <Route path='/10th-class' element={<Tenth/>}/>
    <Route path='/12th-class' element={<Twelfth/>}/>
    <Route path='/ssc' element={<Ssc/>}/>
    <Route path='/upsc' element={<Upsc/>}/>
    <Route path='/neet' element={<Neet/>}/>
    <Route path='/jee' element={<Jee/>}/>
    <Route path='/gate' element={<Gate/>}/>
    <Route path='/bank-po' element={<Bank/>}/>
    <Route path='/cat' element={<Cat/>}/>
    <Route path='/ias' element={<Ias/>}/>
    </Routes>
        </Router>
    
    </>
  )
}

export default App