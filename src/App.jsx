
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'

import Header from './components/Header/Header'
import Players from './components/Player/Player'

function App() {

  const [player, setplayer]=useState([])
  const [coin,setcoin]=useState(0)
  // player.map(crickter=>crickter.prize< coin ? alert('congratualation'): alert('disappinted'))
  
  let money=10000;
  const handleBanner= money =>{
      const newCoin=coin+money;
      setcoin(newCoin)
  }

  const handleplayer=cart=>{
    const newPlayer=[...player, cart]
    console.log(cart.prize)
    console.log(coin)
    cart.prize< coin ? alert('congratualation'): alert('disappinted')
    setplayer(newPlayer)
  }

  return (
    <>
   
      <Header
      coin={coin}
      money={money}
      handleBanner={handleBanner}
      ></Header>
      <Carts 
      player={player}
      handleplayer={handleplayer}
      ></Carts>
      <Players
      player={player}
      ></Players>
      
    </>
  )
}

export default App
