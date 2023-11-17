import React, {useState, useEffect} from 'react'
import { gsap } from 'gsap/dist/gsap';
import CardForPackages from './cards/CardForPackages';
import { AppContext } from '../App';


const PackagesNew = () => {
    const PackagesContext = React.useContext(AppContext);
    const [kolvo,setKolvo] = useState([
        {id:'11'},
        {id:'22'},
        {id:'33'},
        {id:'22'},
        {id:'33'}
    ]);
    useEffect(()=>{
        const cardsNumbs = kolvo.length-1;//Количество карточек
        const arrowBtns = document.querySelectorAll('.arrow-btn') //ищет и записывает все элементы с классом arrow-btn в обьект
        const cardBtns = document.querySelectorAll('.card_carus') //ищет и записывает все элементы с классом card_carus в обьект
        let currentCard = cardsNumbs/2; //текущая активная карточка при загрузке страницы середина
        console.log('currentCard ',currentCard)
        let dir = 1;//Означает что все кнопки управления на месте'        
        arrowBtns.forEach((btn,i)=>{//в итоге из обьекта arrowBtns берется два обьекта в виде стелочек
            btn.onpointerenter = (e)=> gsap.to(btn, {ease:'expo','box-shadow':'0 3px 4px #00000050'})//анимация для стрелочки дальше
            btn.onpointerleave = (e)=> gsap.to(btn, {ease:'expo','box-shadow':'0 6px 8px #00000030'})//анимация для стрелочки назад
            btn.onclick = (e)=> {//действие при нажатии на кнопочку
                dir = (i===0)? 1:-1
                if (i===0) {
                    currentCard--
                    currentCard = Math.max(0, currentCard)//движемся до первой карточки
                }
                else {
                    currentCard++
                    currentCard = Math.min(cardsNumbs, currentCard)//движемся до последней карточки
                }
                moveCards(0.75) //скорость перемещения
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
            .to('.card_carus', {
                x:-170*currentCard,//центрирование фокусированной карточки
                y:(i)=>(i===currentCard)?0:15,//вертикальное выравнивание второстепенных карточек
                height:(i)=>(i===currentCard)?270:240,//высота активной/пассивной карточки
                ease:'elastic.out(0.4)'//gsap дрыгалка
            }, 0)
            .to('.card_carus', {//рамочка, тенюшка, прозрачность и тд выбранной карточки
                cursor:(i)=>(i===currentCard)?'default':'pointer',
                'box-shadow':(i)=>(i===currentCard)?'0 6px 11px #00000030':'0 0px 0px #00000030',
                border:(i)=>(i===currentCard)?'2px solid #26a':'0px solid #fff',
                background:(i)=>(i===currentCard)?'radial-gradient(100% 100% at top, #fff 0%, #fff 99%)':'radial-gradient(100% 100% at top, #fff 20%, #eee 175%)',
                ease:'expo'
            }, 0)
            .to('.arrow-btn-prev', { //гасим кнопки при границах списка карточек
                autoAlpha:(currentCard===0)?0:1
            }, 0)
            .to('.arrow-btn-next', { //гасим кнопки при границах списка карточек
                autoAlpha:(currentCard===cardsNumbs)?0:1
            }, 0)
            .to('.card_carus h4', { // анимация заголовка h4
                y:(i)=>(i===currentCard)?10:8,    
                opacity:(i)=>(i===currentCard)?1:0,
            }, 0)
        }
        moveCards()        
    })
  return (
    <div className='carus'>
        <div className='name_block_dark px-5 align-self-start flex-fill' style={{width:'100%'}}>Пакеты услуг</div>
        <div className='cards_carus-wrapper'>
            <div className='cards_carus'>
                {[...kolvo].map((obj,i)=>{
                    return  <button className='card_carus card1' tabindex="-1">
                                <h2>{obj.id}</h2>
                            </button>
                })}
{/*                 <button className='card_carus card1' tabindex="-1">
                    <h2>Пакет 1</h2>
                </button>
                <button className='card_carus card2' tabindex="-1">
                    <h2>Пакет 2</h2>
                </button>
                <button className='card_carus card3' tabindex="-1">
                    <h4>Пакет 3</h4>
                    <p>asd</p>
                    <h4>Пакет 3</h4>
                </button> */}

            </div>
            <button className="arrow-btn arrow-btn-prev" tabindex="0">
            </button>
            <button className="arrow-btn arrow-btn-next" tabindex="0">
            </button>
        </div>

    </div>
  )
}

export default PackagesNew