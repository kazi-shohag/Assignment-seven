import footerimg from '../../assets/images/logo-footer.png'

const Fotter=()=>{
    return(
        <div className=" mx-8 pb-10 pt-32 bg-black">
            <img className='mx-auto' src={footerimg} alt="" />
            <div className='flex justify-around mt-2'>
                <div className=''>
                    <h4 className='font-semibold text-lg mb-2 text-[#FFFFFF]'>About Us</h4>
                    <p className='text-base w-60 font-normal text-[#FFFFFF99]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div> 
                <div>
                <h4 className='font-semibold text-lg mb-2 text-[#FFFFFF]'>Quick Links</h4>
                <ol>
                    <li className='text-base font-normal text-[#FFFFFF99]'>Home</li>
                    <li className='text-base font-normal text-[#FFFFFF99]'>Services</li>
                    <li className='text-base font-normal text-[#FFFFFF99]'>About</li>
                    <li className='text-base font-normal text-[#FFFFFF99]'>Contact</li>
                </ol>
                
                </div>
                <div>
                    <h4 className='font-semibold mb-2 text-lg text-[#FFFFFF]'>Subscribe</h4>
                    <p className='w-60 text-base font-normal text-[#FFFFFF99]'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex mt-3'>
                    <label className="border-[1px] px-2 py-1 bg-white stroke-amber-50 rounded-l-lg ">
                    <input className="font-normal m-2 text-base" type="text" placeholder="Enter your email" />
                    </label>
                    <button className="text-base px-5 py-2 rounded-r-xl bg-gradient-to-r from-lime-200 to-orange-300 font-semibold">Subscribe</button>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Fotter;