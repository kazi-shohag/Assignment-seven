import Playe from "../Playe/Playe"

const Players=({player})=>{
// const {img, name, style}=player;
// console.log(player)
    return(
        <div>

        <h2 className="mx-8 text-3xl font-bold ">Selected Player({player.length}/6)</h2>
        <div className="mx-8 space-y-4">
        {
            player.map((playe,idx)=><Playe 
            key={idx}
            playe={playe}
            ></Playe>)
        }
        </div>
        </div>
       
    )
}

export default Players