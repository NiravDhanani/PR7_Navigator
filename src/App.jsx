import { BrowserRouter,Route,Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { Home } from './pages/Home'
import { View } from './pages/View'
import { Edit } from './pages/Edit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/view' element={<View/>}></Route>
          <Route path='/edit/:editid' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
