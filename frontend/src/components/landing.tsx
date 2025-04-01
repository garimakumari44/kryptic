
import { Button } from '../components/ui/Button'
import { Navbar } from '../components/Navbar'
import crypt from './../assets/crypto1.jpg'
import { CheckIcon } from '../components/icons/check'
import { Chevron } from '../components/icons/chevron'
import { Slider } from '../components/ui/slider'
import { Faqs } from '../components/ui/Faqs'
import { Footer } from '../components/ui/Footer'
import { Link } from 'react-router-dom'
import {motion}  from 'framer-motion'



 
export  default function Landing() {

  

  
  return (
    <div className='top-0  flex flex-col'> 
      <Navbar/>
    <div className='bg-primary lg:flex lg:flex-row md:flex-col flex flex-col lg:pt-20 px-10  w-full md:px-20  lg:px-40'>
   
      <div >
      <motion.div initial={{opacity: 0, y:50}} animate={{opacity: 1, y:0 }} transition={{duration: 2, staggerChildren: 0.5}}>
        <p className='lg:text-6xl md:text-4xl text-4xl font-family-rubik tracking-widest mt-12 mb-12 font-bold' >
        Analyze Your Market for predicting price trends with Al driven Technology
        </p>
        <motion.div initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0 }} transition={{duration: 2, staggerChildren: 0.5}}> 
        <Section3/>
        </motion.div >
        <motion.div  whileTap={{ scale: 1.2 }} className='p-2 ml-16 pt-5 transition delay-150 duration-300 ease-in-out mb-14 mt-10'>
          <Link to={'/Signup'}> 
          
        <Button  title='Get Started' textstyle='size-7' variant='first' size='vlg' width='Bold' font='rubik' icon={<Chevron size='md' color='red'/>} />
        </Link>
        </motion.div>
        </motion.div>
        </div>
        
      <div className='bg-primary   fill-[#F3EFEF] '>
     
   
        <img src={crypt}  className='overflow-x-scroll  bg-transparent border-8 translate-y-20 rounded-md h-[612px] w-[1520px] '/>
      
    </div> 
    
    </div> 
   
    <Section1/>
    <Section2/>
    <Footer/>


       
    </div>
  )

  
}







export function Section1() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
    <div className="px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-7xl font-bold  font-family-rubik sm:text-4xl text-center mb-12 mt-20 lg:border-2 lg:border-gray-100 rounded-4xl">How it works?</h2>
      <h3 className='  text-2xl text-gray-400 text-start pl-14 pr-14 pb-14 mb-7 tracking-wider'> Create a decentralized, AI-driven trading assistant that helps users make smarter, data-driven decisions in the cryptocurrency market. The assistant would be built on blockchain technology to ensure transparency, security, and user control over their data. </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          {
            
            title: "Input",
            description: "Connect your trading account or upload historical data to get started. Our platform supports integration with major exchanges like Binance, Coinbase, and more." },
          {
            
            title: "Analyze",
            description: "Our advanced AI algorithms analyze millions of data points, including historical prices, news sentiment, and technical indicators." },
          {
           
            title: "Prediction",
            description: "Get real-time predictions displayed on your personalized dashboard. Receive alerts via email or mobile notifications when significant trends are detected."
          },
          {
            
            title: "Take Action",
            description: "Use our predictions to make smarter trading decisions and maximize your returns. Our tool provides actionable insights to help you stay ahead of the market"
          },
          {
            
            title: "Monitor",
            description: "Track your portfolio performance and compare it to AI predictions."


          },
          {
            
            title: "Optimization",
            description: "Refine your strategies based on real-time feedback and insights."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            
            className="flex flex-col items-start p-4 md:p-6 bg-primary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-2 md:p-3 bg-[#FFF1F1] border-2 border-[#FCD7D7] rounded-full mb-3 md:mb-4">
                 <Chevron size='md' color='red'/>
              
            </div>
            <h3 className="text-lg md:text-xl font-lora font-bold mb-2">{feature.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground tracking-wider">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}


function Section2() {
  return (
    <div className=' flex flex-col justify-center  bottom-0 bg-primary  w-full lg:px-40 '>
      <div className='text-4xl p-24 justify-center text-center' >
        <h1 className='text-5xl font-family-rubik font-bold border-2 sm:rounded-2xl  lg:border-gray-200' > Our Partners </h1>
      </div>
      <Slider/>
      <Faqs/>
      
    <div className=' flex items-center bg-black rounded-md  '>

    </div>

    </div>
  )
}



function Section3() {
  return <div className='flex flex-col gap-5'>
    <div className='flex gap-3 items-center'>
      <div className='p-2 bg-amber-100 rounded-full'>
        <CheckIcon color='amber'   size='lg'/>
        
      </div>

      <div className=''>
        <span className='text-3xl font-bold mb-10' >
        AI-Driven Market Analysis
             
        </span>
        <div className='text-md mt-3 font-family-rubik text-gray-500 pr-28'>
        Use machine learning models to analyze historical and real-time market data, news, social media sentiment, and on-chain metrics (e.g., wallet activity, transaction volume).
     
        </div>
         </div>
      
    </div>
    <div className='flex gap-3 items-center'>
      <div className='p-2 bg-purple-100 rounded-full'>
        <CheckIcon color='purple'   size='lg'/>
        
      </div>

      <div className=''>
        <span className='text-3xl font-bold mb-10' >
        Personalized Trading Strategies
             
        </span>
        <div className='text-md mt-3 font-family-rubik text-gray-500 pr-28'>
        Allow users to input their risk tolerance, investment goals, and preferred trading style (e.g., day trading, long-term holding)
        </div>
         </div>

  </div>


  
  </div>

}



 

 

 
