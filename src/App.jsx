
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'

import Header from './components/Header/Header'
import Players from './components/Player/Player'
import Subscribe from './components/Subscribe/Subscribe'
import Fotter from './components/Fotter/Footer'

function App() {

  const [player, setplayer]=useState([])
  let [coin,setcoin]=useState(0)
  // player.map(crickter=>crickter.prize< coin ? alert('congratualation'): alert('disappinted'))
  
  let money=10000;
  const handleBanner= money =>{
      const newCoin=coin+money;
      setcoin(newCoin)
  }

  const handleplayer=cart=>{
    const newPlayer=[...player, cart]
   
   if(cart.prize< coin){
    alert('congratualation');
    setcoin(coin-cart.prize);
    setplayer(newPlayer)
   }
   else{
    alert('disappionted')
   }
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

      <Subscribe></Subscribe>
      <Fotter></Fotter>
      
    </>
  )
}

export default App
