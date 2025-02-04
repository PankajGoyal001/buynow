import React from 'react'
import arrowRight from "../../assets/svg/ArrowRight.svg";
import GlobalMap from "../../assets/Images/GlobalMap.png";
import CountdownTimer from '../ui/CounterTimer';


const ContactPage = () => {
  return (
    <>
      <div className="container ">
        <div className="py-5 sm:py-20">
          <div className="flex flex-col gap-5 sm:gap-10">
            <div className="flex flex-col gap-[10px]">
              <h1 className='sm:text-[34px] leading-[42px] tracking-wide text-2xl text-gray-graystrong font-heebo_Medium'>Get In Touch!</h1>
              <div className="sm:flex items-center pb-5 border-b hidden border-[#42265914]">
                <p className="text-gray-graydark text-base tracking-[0.15px] font-inter_regular">Home</p>
                <img className='' src={arrowRight} alt="arrow" />
                <p className="text-base tracking-[0.15px] font-inter_regular text-gray-graystrong ">Contact us</p>
              </div>
            </div>
            <div className="md:flex grid gap-5 sm:gap-6">
              <div className="grid w-full gap-[10px] sm:gap-5">
                <h2 className='font-heebo_Medium text-xl leading-8 tracking-[0.15px] text-gray-graystrong'>Contact Us</h2>
                <input className=' outline-none border py-4 px-5 rounded-[30px] text-gray-graydark  text-base tracking-[0.15px] font-inter_regular' type="Name" id='name' placeholder='Name' />
                <input className=' outline-none border py-4 px-5 rounded-[30px] text-gray-graydark  text-base tracking-[0.15px] font-inter_regular' type="phone" id='Email' placeholder='Email/Phone no.' />
                <select className='border px-5 py-4 rounded-[30px]' name="product" id="product">
                  <option>Select an option...</option>
                  <option className='text-gray-graydark'>B</option>
                  <option className='text-gray-graydark'>C</option>
                  <option className='text-gray-graydark'>D</option>
                  <option className='text-gray-graydark'>E</option>
                </select>
                <input className=' outline-none border py-4 px-5 rounded-[30px] text-gray-graydark  text-base tracking-[0.15px] font-inter_regular pb-12' type="comment" id='comment' placeholder='Comment' />
                <div className="flex gap-[9px]">
                  <input type="checkbox" id='continue' />
                  <p className="text-gray-graydark font-inter_regular sm:text-base text-sm tracking-[0.17px] sm:tracking-[0.15px] py-[9px]">By continuing, you agree to Buynow policy</p>
                </div>
                <button className='font-inter_Medium text-[15px] leading-[26px] sm:max-w-[166px] w-full bg-purple-Purple_dark text-white rounded-[30px] py-2 px-[22px] tracking-[0.46px]'>SEND MESSAGE</button>
              </div>
              <div>
                <div className=" h-96 md:h-[450px] lg:h-[500px] rounded-xl lg:w-[600px] md:w-[400px] :w-[200px] overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55199.41529528346!2d74.19721845!3d30.152460799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a79154f86721%3A0x4ce09ae52bb2fd93!2sAbohar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1738573117871!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
