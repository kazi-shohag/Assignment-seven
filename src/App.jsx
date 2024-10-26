
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'

import Header from './components/Header/Header'
import Players from './components/Player/Player'
import Subscribe from './components/Subscribe/Subscribe'
import Fotter from './components/Fotter/Footer'

function App() {
  const [active, setactive]=useState(false)
  // const [isactive, setisactive]=useState(false)
  const [player, setplayer]=useState([])
  let [coin,setcoin]=useState(0)
  
  const handleavailable=()=>{
    if(active===true){
      setactive(!active)
    }
    // if(isactive===false){
    //   setisactive(!isactive)
    // }
  }
  const handlesellect=()=>{
    if(active===false){
      setactive(!active)
    }
    // console.log("kaj hobe")
  }
  // active==false
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
      handleavailable={handleavailable}
      active={active}
      handlesellect={handlesellect}
      player={player}
      handleplayer={handleplayer}
      ></Carts>

      <Players
      active={active}
      player={player}
      ></Players>

      <Subscribe></Subscribe>
      <Fotter></Fotter>
      
    </>
  )
}

export default App
