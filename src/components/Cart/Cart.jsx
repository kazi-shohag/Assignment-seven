
const Cart=({cart})=>{
    const {name, img, rat, country, quality, style, button, button1, prize}=cart;
    return(
        <div className="border-[1px] stroke-slate-200 rounded-lg p-2 mx-8 space-y-3">
            <img className=" rounded-lg h-[250px]" src={img} />
           <div className="flex">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

           <h3 className="text-lg font-semibold">{name} </h3>
           </div>
           <div className="flex border-b-2 pb-2 justify-between items-center">
           <div className="flex gap-2  ">
           
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
                </p> 
            <p className="font-extralight">{country} </p>           
             </div >
            <button className="btn px-3 py-1 bg-slate-100">{button1}</button>
           </div>
           <p className="font-semibold text-base">{rat}</p>
           <div className="flex justify-between items-center">
            <p className="font-medium text-base">{style} </p>
            <p className="font-normal text-base">{style} </p>
           </div>
            <div className="flex justify-between items-center">
                <p className="font-medium text-base">Price: ${prize}</p>
                <button className="btn px-3 py-1 bg-slate-50">{button}</button>
            </div>
        </div>
    )
}
export default Cart;