import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <Dashboard  name="Brian"/>
    </div>
  )
}

export default App
