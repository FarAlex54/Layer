import React, { useEffect} from 'react'
import { gsap } from 'gsap/dist/gsap';
import { AppContext } from '../App';
import CardForPackages from './cards/CardForPackages';


const PackagesNewTwo = (props) => {
    const PackagesContext = React.useContext(AppContext);
    const widthCards ={width:(PackagesContext.packages.length*360)+'px'}
    useEffect(()=>{

        const arrowBtns = document.querySelectorAll('.arrow-btn')
        const cardBtns = document.querySelectorAll('.card_packages')
        let currentCard = (PackagesContext.packages.length)%2>0? (PackagesContext.packages.length-1)/2:PackagesContext.packages.length/2-1;
        let dir = 1;
        moveCards()
        arrowBtns.forEach((btn,i)=>{
            btn.onpointerenter = (e)=> gsap.to(btn, {
                ease:'expo',
                'box-shadow':'0 3px 4px #00000050'
            })
            btn.onpointerleave = (e)=> gsap.to(btn, {
                ease:'expo',
                'box-shadow':'0 6px 8px #00000030'
            })
            btn.onclick = (e)=> {
                dir = (i===0)? 1:-1
                if (i===0) {
                currentCard--
                currentCard = Math.max(0, currentCard)
                }
                else {
                currentCard++
                currentCard = Math.min(PackagesContext.packages.length-1, currentCard) /* метод нужен для кнопки next в нем указан номер последней карты */
                }
                moveCards(0.75)
            }
        })
        cardBtns.forEach((btn,i)=>{
            btn.onpointerenter = (e)=> gsap.to(btn, {
                ease:'power3',
                overwrite:'auto',
                'box-shadow':()=>(i===currentCard)?'0 6px 11px #00000030':'0 6px 11px #00000030'
            })
            btn.onpointerleave = (e)=> gsap.to(btn, {
                ease:'power3',
                overwrite:'auto',
                'box-shadow':()=>(i===currentCard)?'0 6px 11px #00000030':'0 0px 0px #00000030'
            })
            btn.onclick = (e)=> {
                dir = (i<currentCard)? 1:-1
                currentCard = i
                moveCards(0.75)
            }
        })
        function moveCards(dur=0){
        gsap.timeline({defaults:{ duration:dur, ease:'power3', stagger:{each:-0.03*dir} }})
            .to('.card_packages', {
            x:-270*currentCard,
            y:(i)=>(i===currentCard)?0:15,
            height:(i)=>(i===currentCard)?100+'%':100+'%',
            ease:'elastic.out(0.4)'
            }, 0)
            .to('.card_packages', {
            cursor:(i)=>(i===currentCard)?'default':'pointer',
            'box-shadow':(i)=>(i===currentCard)?'0 6px 11px #00000030':'0 0px 0px #00000030',
            border:(i)=>(i===currentCard)?'2px solid #26a':'0px solid #fff',
            background:(i)=>(i===currentCard)?'radial-gradient(100% 100% at top, #fff 0%, #fff 99%)':'radial-gradient(100% 100% at top, #fff 20%, #eee 175%)',
            ease:'expo'
            }, 0)
            .to('.arrow-btn-prev', {
            autoAlpha:(currentCard===0)?0:1
            }, 0)
            .to('.arrow-btn-next', {
            autoAlpha:(currentCard===PackagesContext.packages.length-1)?0:1
            }, 0)
        }
    })          
  return (
    <div className='body_packages' >
        <div className='name' style={{width:'100%', fontSize: '54px', marginLeft: '286px', marginTop: '14px', marginBottom: '14px', backgroundColor: '#444856', color: 'white'}}>Пакеты услуг</div>
        <div className='cards-wrapper' style={{ marginBottom: '30px'}} >
            <div className='cards' style={widthCards}>
                {PackagesContext.packages.map((obj,i)=>
                        <div key={obj.id} className='card_packages' tabIndex="-1"  style={{ width: '320px'}} >
                                <CardForPackages
                                    keys={obj.id+props.keys}
                                    id={obj.id}
                                    name={obj.name}
                                    price={obj.price}
                                    description={obj.description}
                                    include={obj.include}
                                    uninclude={obj.uninclude}
                                    
                                />
                        </div>
                )}
            </div>
            <button className="arrow-btn arrow-btn-prev" tabIndex="0">
            </button>
            <button className="arrow-btn arrow-btn-next" tabIndex="0">
            </button>
        </div>
    </div> 
  )
}

export default PackagesNewTwo