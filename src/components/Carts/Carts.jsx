import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import './Carts.css'
import Cart from '../Cart/Cart';
const Carts=({handleplayer,handlesellect, handleavailable, player, active})=>{
    const [carts, setcarts]=useState([])

    useEffect(()=>{
        fetch('Carts.json')
        .then(res=>res.json())
        .then(data=>setcarts(data))
    },[])
    
  

    return(
        <div>

        <div className='mx-8 mt-3'>
            <div className='mt-8 flex justify-between items-center'>
                <h2 className='text-lg font-bold'>Available Players</h2>
                <div>
                    <button onClick={handleavailable} className="border-[1px] shadow-slate-50 rounded-l-xl py-2 px-4">Available</button>
                    <button onClick={handlesellect} className={`border-[1px] shadow-slate-50 rounded-r-xl py-2 px-4`}>Selected({player.length})</button>
                </div>
            </div>
        </div>

           <div className={`${active? 'displayhide': ''} grid grid-cols-3 space-y-2 mt-5`}>
           {
            carts.map((cart,idx)=><Cart
            key={idx}
            cart={cart} 
            handleplayer={handleplayer}
            ></Cart>)
        }
           </div>
        </div>
      
    )
}
Carts.propTypes={
    handleplayer:PropTypes.func,
    player:PropTypes.object,
    handlesellect:PropTypes.func,
    handleavailable:PropTypes.func,
    active:PropTypes.bool

}
export default Carts;