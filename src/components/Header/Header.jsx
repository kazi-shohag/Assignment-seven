import navimg from '../../assets/images/logo.png'
import bannerimg from '../../assets/images/banner-main.png'
import backimg from '../../assets/images/bg-shadow.png'
import PropTypes from 'prop-types';


const Header=({coin, money, handleBanner})=>{
    
    return(
       <div className='mx-8'>
         <div className='flex justify-between items-center'>
            <img className='' src={navimg} alt="" />
            <div className='flex gap-2 items-center'>
                <a >Home</a>
                <a >Teams</a>
                <a >Playeres</a>
                <a > Schedule</a>
                <button className='flex justify-between items-center text-center border-2 shadow-lime-50 p-2 rounded-lg'> <span id='coin' className=''>{coin} coin</span> <span className='bg-amber-400 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span></button>
            </div>
        </div>
        <div className='mx-auto pt-5 space-y-3 pb-6' style={{backgroundImage: `url(${backimg})`, backgroundColor: 'black'}}>
            <img className='mx-auto' src={bannerimg} alt="" />
            <h1 className='mx-auto w-[70%] font-bold text-4xl text-slate-50'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='font-medium mx-auto w-1/3 text-2xl text-slate-100'>Beyond Boundaries Beyond Limits</p>
            <div className='mx-auto w-1/6 '>
            <button onClick={()=>handleBanner(money)} className='border-2 rounded-lg stroke-orange-200 p-2 bg-yellow-200'>Claim Free Credit</button>
            </div>
        </div>
       </div>
    )
}
Header.propTypes={
    coin:PropTypes.number,
    money:PropTypes.number,
    handleBanner:PropTypes.func
}
export default Header;