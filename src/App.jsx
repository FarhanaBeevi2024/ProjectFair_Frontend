import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import MyProject from './components/MyProject'


function App() {
  

  return (
    <>

<Routes>

  <Route path='/' element = {<Home/>}/>
  <Route path='/project' element = {<Projects/>}/>
  <Route path='/dashboard' element = {<Dashboard/>}/>
  <Route path='/login' element = {<Auth/>}/>
  <Route path='/register' element = {<Auth register/>}/>
  <Route path='/myproject' element = {<MyProject/>}/>
  {/* to access the path that is not set */}
  <Route path='*' element = {<PageNotFound/>}/>
 
</Routes>
<Footer/>
    </>
  )
}

export default App
