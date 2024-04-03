import { useState } from 'react'

// import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  return (

      <div className='flex justify-around items-end w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap gap-2 bg-white p-2 mx-5 my-5 rounded-full'>
        <button className='bg-red-500 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('red')}>Red</button>
        <button className='bg-green-500 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#20fc03')}>Green</button>
        <button className='bg-pink-500 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#fc03f0')}>Pink</button>
        <button className='bg-blue-700 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#0380fc')}>Blue</button>
        <button className='bg-yellow-500 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#fce303')}>yellow</button>
        <button className='bg-blue-400 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#34baeb')}>lightblue</button>
        <button className='bg-red-900 px-5 py-1 text-xl font rounded-full' onClick={() => setColor('#450202')}>Brown</button>
        </div>

      </div>
      
  )
}

export default App
