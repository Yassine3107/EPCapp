import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Asbest from './pages/Asbest';

import EPC from './pages/EPC'
import Home from './Pages/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/epc",
    element: <EPC/>
  },
  {
    path: "/asbest",
    element: <Asbest/>
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
        

  )
}

export default App
