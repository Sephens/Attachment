import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card
      img = 'src/assets/img1.png'
      name="Steve"
      phone="0733333333"
      />
      <Card
      img = 'src/assets/img2.png'
      name="Dan"
      phone="07089898"
      />
      <Card
      img = 'src/assets/img3.png'
      name="Ben"
      phone="0723998781"
      />
      <Card
      img = 'src/assets/img4.png'
      name="Baryl"
      phone="0787876622"
      />
      <Card
      img = 'src/assets/img5.png'
      name="Alphonse"
      phone="0782555211"
      />
    </div>
  )
}

export default App
