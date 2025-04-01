 import logo from '../../assets/slider/logo.png'
 
 export function Footer() {
    return (
      <div className='  flex flex-col lg:flex-row justify-center md:flex md:flex-col  bottom-0 bg-secondary lg:p-20 lg:w-full'>
  
      <div className=' flex flex-col items-center bg-black rounded-lg  lg:w-full lg:px-20 px-40  '>
        
        <div className="flex flex-col lg:flex-row justify-between text-white mt-20 mb-20 space-x-60 ">
            

            <div className="flex ">
                <div className="flex flex-col space-y-4 px-20 font-family-rubik text-lg font-bold ">
                    <p>  Support </p>
                    <p>  Blog </p>
                    <p> FAQ </p>
                    <p> Help Centre </p>
                    <p>  Contact us</p>
               





                </div>
                <div  className="flex flex-col space-y-4 font-family-rubik text-lg font-bold ">
                    <p>  Social </p>
                    <p> Facebook</p>
                    <p> Instagram </p>
                    <p> LinkedIn </p>
               </div>
            
           
            </div>
            <div className="px-28 space-y-2">
            <p className="text-3xl font-family-rubik font-extrabold" > Download it now </p>
            <p className="font-family-rubik text-lg ">Analyze your crypto market solution with our AI drivem app </p>
            <p className="font-lora  text-lg border-2 border-white rounded-lg mx-32 text-center py-1"> App store </p> 
             <p className="font-lora text-lg border-2 border-white rounded-lg mx-32 text-center py-1"> Play store</p>





            </div>
           

        </div>
        <div className=" flex flex-col md:flex lg:flex lg:flex-row justify-between mt-10 lg:space-x-60  ml:10 ">
            <div className="text-white mt-6">
                
        <span className="lg:flex-row lg:space-x-4 ">
          <img src={logo} className='w-10 h-10 justify-center'/>
          <p className='text-7xl font-lora'> Kryptic </p>  
             </span>
             <div className=';g:flex lg:flex-col lg:space-y-1 mt-4 font-light font-family-rubik'> 
                <p>  169 E12 Delhi 110006</p>
                <p> team@kryptic.com </p>
                <p> registered under license </p>
                <div className='flex space-x-3'>
                <p className='font-bold'> 2025 ©Kryptic </p>
                <p className='font-bold'> Privacy Policy </p>
                <p className='font-bold'> Terms</p>
                     </div>
               

             
                </div>         
           

            </div>
            <div className="bg-white  lg:p-20 text-3xl font-bold font-family-rubik  rounded-2xl hidden lg:flex lg:flex-col lg:space-y-16 justify-center text-center mb-3 text-black">
                 Subscribe to <br/> our newsletter 
                <input placeholder="email" className="bg-amber-50  mt-10 rounded-full p-3 text-lg  border-2 border-gray-200 font-light text-black"/ > 



            </div>
           

        </div>
  
      </div>
  
      </div>
    )
  }