import PropTypes from 'prop-types';

import Playe from "../Playe/Playe"

const Players=({player,active})=>{

    return(
            <div className={`${active? '':'displayhide'} `}>

        <h2 className="mx-8 text-3xl font-bold my-4 ">Selected Player({player.length}/6)</h2>
        <div className="mx-8 space-y-4">
        {
            player.map((playe,idx)=><Playe 
            key={idx}
            // active={active}
            playe={playe}
            ></Playe>)
        }
        </div>
        <div className="border-[1px] mx-8 shadow-orange-50 p-1 rounded-lg w-[160px] mt-4">
        <button className="text-base font-semibold border-[1px] stroke-orange-50 rounded-lg bg-yellow-300 px-3 py-1">Add More Player</button>

        </div>
        </div>
       
    )
}
Players.propTypes ={
    active:PropTypes.bool,
    player:PropTypes.array
}
export default Players