import { useEffect, useState } from 'react';
import './Carts.css'
import Cart from '../Cart/Cart';
const Carts=()=>{
    const [carts, setcarts]=useState([])

    useEffect(()=>{
        fetch('Carts.json')
        .then(res=>res.json())
        .then(data=>setcarts(data))
    },[])

    const handleCart=()=>{
        
    }

    return(
        <div>

        <div className='mx-8 mt-3'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-bold'>Available Players</h2>
                <div>
                    <button onClick={handleCart} className="btn px-3">Available</button>
                    <button className="btn px-3">Selected( )</button>
                </div>
            </div>
        </div>

           <div className='grid grid-cols-3 space-y-2 mt-5'>
           {
            carts.map((cart,idx)=><Cart
            key={idx}
            cart={cart} ></Cart>)
        }
           </div>
        </div>
      
    )
}

export default Carts;