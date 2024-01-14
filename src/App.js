import React, { useCallback, useState } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [theme ,setTheme] = useState('light');
   
  return (
    <div className='container'>

<Navbar theme={theme} setTheme = {setTheme}/>
    </div>

  )
}

export default App