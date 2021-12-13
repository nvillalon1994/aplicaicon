import React from 'react'
import{Routes, Route} from 'react-router-dom'
import ManShop from './ManShop'
import WomanShop from'./WomanShop'
import Home from './Home'

export function App() {
  return (
    <div>
      <Routes>
        <Route path ="/aplicaicon" element={<Home/>}></Route>
        <Route path="/aplicaicon/ManShop.js" element={<ManShop/>}/>
        <Route path="/plicaicon/WomanShop.js" element={<WomanShop/>}/>
        

      </Routes>
      {/* <Home></Home>
      <ManShop></ManShop>
      <WomanShop></WomanShop>
      */}
      
    </div>
  )
}

export default App;
