import bin1 from '../../assets/slider/Binance.png'
import bin2 from '../../assets/slider/bin2.png'
import bin3 from '../../assets/slider/bin3.png'
import bin4 from '../../assets/slider/bin4.png'
import bin5 from '../../assets/slider/bin5.png'
import bin6 from '../../assets/slider/bin6.png'
import bin7 from '../../assets/slider/bin7.png'
import bin8 from '../../assets/slider/bin8.png'
import bin9 from '../../assets/slider/bin9.png'
import bin10 from '../../assets/slider/bin10.png'




export function Slider() {
    return <div className=' ' >
           
              <div className='flex min-w-slider space-x-16 md:space-x-20 lg:space-x-40 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,#000_10%_90%,transparent)]   '>

              <div className='h-item-h w-item-w  animate-loop-scroll hover:animate-paused' >
                <img src={bin1}  />
    
              </div>
              <div className='h-item-h w-item-w animate-loop-scroll '  >
                <img src={bin2}   />
    
              </div>
    
              <div  className='h-item-h w-item-w  animate-loop-scroll'  >
                <img src={bin3} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll'  >
                <img src={bin4} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll '  >
                <img src={bin5} />
    
              </div>
              
              
    
              </div>
              <div className='flex min-w-slider mt-5  space-x-16 md:space-x-20 lg:space-x-40 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,#000_10%_90%,transparent)]   '>

              
              <div  className='h-item-h w-item-w animate-loop-scroll'  >
                <img src={bin6} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll '   >
                <img src={bin7} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll '   >
                <img src={bin8} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll'   >
                <img src={bin9} />
    
              </div>
              <div  className='h-item-h w-item-w animate-loop-scroll'   >
                <img src={bin10} />
    
              </div>
              
    
              </div>
            </div>
           
}