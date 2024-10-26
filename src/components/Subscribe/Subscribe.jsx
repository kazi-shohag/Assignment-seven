
import bgshaddo from '../../assets/images/bg-shadow.png'
const Subscribe=()=>{
    return (
        <div className='border-[1px] shadow-orange-50 p-3 bg-[#FFFFFF] rounded-xl positionrela w-4/5 mx-auto'>
            <div style={{backgroundImage: `url(${bgshaddo})`}} className=" rounded-lg pt-4  border-[1px] space-y-3  bg-slate-100">
            <h2 className="text-3xl w-[400px] mx-auto font-semibold">Subscribe to our Newsletter</h2>
            <p className="font-normal w-[420px] mx-auto text-lg">Get the latest updates and news right in your inbox!</p>
            <div className="flex pb-8 pt-4 gap-5 w-[420px] mx-auto items-center">
                <label className="border-[1px] px-2 py-1 bg-white stroke-amber-50 rounded-lg ">
                    <input className="font-normal m-2 text-base" type="text" placeholder="Enter your email" />
                </label>
                <div>
                    <button className="text-base px-3 py-2 rounded-lg bg-gradient-to-r from-lime-200 to-orange-300  btn font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Subscribe;