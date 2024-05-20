import { Menu } from './menu'
import './App.css'


function App() {

  const handleStart = () => {
    console.log('start')
  }
  

  return (
    <div>
      <Menu onStart={handleStart}/>
    </div>


  )
}

export default App
