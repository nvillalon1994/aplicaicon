import React from 'react'
import{Routes, Route} from 'react-router-dom'
import ManShop from './ManShop'
import WomanShop from'./WomanShop'
import Home from './Home'

export function App() {
  return (
    <div>
      {/* <Routes>
        <Route path ="/aplicaicon" element={<Home/>}></Route>
        <Route path="/ManShop.js" element={<ManShop/>}/>
        <Route path="/WomanShop.js" element={<WomanShop/>}/>
        

      </Routes> */}
      <Home></Home>
      
     
      
    </div>
  )
}

export default App;
