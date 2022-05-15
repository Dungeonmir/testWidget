import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState, useCallback, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from "https://unpkg.com/htm@latest/dist/htm.module.js?module";

const html = htm.bind(h);


// Url object for storing parameters


// Counter
function useCounter(){
    const [counter, setCounter] = useState(0);
    const counterPrev = 0;
    const savePrev = ()=> counterPrev = counter
    const increment = useCallback(()=>{
        savePrev
        setCounter(counter+1)
    }, [counter])
    const decrement = useCallback(()=>{
        savePrev
        setCounter(counter-1)
    }, [counter])
    const startOver = useCallback(()=>{
        savePrev
        setCounter(0)
    }, [counter])
    return {counter, counterPrev, increment, decrement, startOver}
}


// Основная точка виджета
const Widget = () => {
    // Добавление стилей перед отображением виджета
    const styles = html`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Roboto:wght@300;400;600;700&display=swap');
        p{
            margin:0;
            padding: 0;
        }
        #glasses-quiz-widget{
            background: beige;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .link{
            cursor: pointer;
        }
        .screen0{
            position: relative;
            background: #F7F8F9;
            height: 638px;
            width: 375px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .screen0 > .header{
            width: 350px;
            height: 66px;
            background: #FFFFFF;
            box-shadow: 0px 1px 7px rgba(58, 72, 80, 0.07);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        } 
        .logo{
            height: 66px;
            width: 170px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #glasses-quiz-widget > .main{
            width:375px;
            height: 572px;
            background: #F7F8F9;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .arrow_right{
            cursor: pointer;
            width: 50px;
            height: 66px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .arrow_right > img{
            transition: 0.5s;
        }
        .arrow_right:hover > img{
            transition: 0.3s;
            transform:scale(1.5)
        }
        .screen0 > .main{
            width: 375px;
            height: 572px;
            background: linear-gradient(180deg, #E8F0F2 0%, rgba(232, 240, 242, 0) 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
        } 
        .screen0 > .main > .blueText{
        position: absolute;
        top: calc(50% - 31px/2 + 30.5px);
        }
        .blueText{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 31px;

            /* identical to box height, or 129% */
            text-align: center;

            color: #2196F3;
        }
        .screen0 > .main > .blackText{
        position: absolute;
        top: calc(50% - 52px/2 + 94px);
        width: 272px;
        height: 52px;
        }
        .glassesImg{
            position: absolute;
            width: 312px;
            height: 153px;
            top: 133px;
        }
        .blackText{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 174%;
            text-align: center;
            color: #3A4850;
        }
        .btnBlue{
            position: absolute;
	        bottom: 122px;
            height: 48px;
            width: 177px;
            border-radius: 24px;
            border: 0px;
            background: linear-gradient(270deg, #45C7FA 0%, #2196F3 100%);
            box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #FFFFFF;

            transition: all 0.3s;
        }
        .btnBlue:hover{
        transform: translateY(-5px);
        box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
        }
        .upbar{
            background: #FFFFFF;
            box-shadow: 0px 1px 2px rgba(58, 72, 80, 0.07), 0px 6px 13px rgba(176, 189, 197, 0.14);
            width: 375px;
            height: 66px;
            overflow: hidden;
            position: relative;
        }
        .upbar_header{
            height: 58px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 19px;
            text-align: center;
            color: #3C5060;
        }
        .headerText{
            margin-top: 50px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 29px;
            text-align: center;
            color: #0F0F0F;
        }
        .inlineFlex{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .btnBack{
            height: 58px;
            width: 54px;
        }
        .btnExit{
            height: 58px;
            width: 58.39px;
        }
        .scale > img{
           transition: 0.3s
        }
        .scale:hover > img{
            transition: .3s;
            transform: scale(1.3)
        }
        .line{
            height: 8px;
        }
        .lineGray{
        position: absolute;
        width: 375px;
        height: 8px;
        background: #D8D8D8;
        }
        .line{
            position: absolute;
            width: 375px;
            height: 8px;
            background: linear-gradient(290.47deg, #3797FA 11.33%, #45C9FF 83.66%);
            border-radius: 4px;
            left: -375px;
        }
        .choiceBtn{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background: #FFFFFF;
            border: 1px solid rgba(231, 235, 237, 0.80141);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
            border-radius: 14px;
            transition: 1s;
        }
        .choiceBtn:hover{
            border: 1px solid #45C9FF;
            transition: 0.5s;
        }
        .choiceBtn p{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            /* identical to box height */
            text-align: center;
            color: #425A60;
        }
        @media only screen and (min-width: 700px) {
            .screen0 .main{
            width: 100%;
            height: 100%;
            }
            .btnBlue{
                height: 72px;
                width: 265px;
                border-radius: 36px;
                font-size: 26px;
            }

        }
    </style>`


    const {counter, counterPrev, increment, decrement, startOver} = useCounter()
    

    // Screen 0 func
    const screen0  = ()=>{


        //Logo and next page arrow
        const header  = ()=>{
            return html`<div class="header">
            <div class="logo">
                <img src="https://svgshare.com/i/hKp.svg"/>
            </div>
            <div class="arrow_right" onclick="${increment}">
                <img src="https://svgshare.com/i/hKV.svg"/>
            </div>
            </div>`
        }


        // Start now button
        const main = ()=>{
            return html`<div class="main">
            <img class="glassesImg" src="https://svgshare.com/i/hJo.svg"/>
            <p class="blueText">Let’s find your perfect pair!</p>
            <p class="blackText">Take the quiz to easily discover your perfect fit from thousands of styles</p>
            <button class="btnBlue link" onclick="${increment}">Start now</button>
            </div>`
        }


        return html`
        <div class="screen0">
            <${header}/>
            <${main}/>
        </div>`
    }


    // Upbar
    const upbar = ()=>{


        // Header upper part of upbar
        const header = ()=>{
            return html`
            <div class="upbar_header">
                <div class="btnBack inlineFlex scale" onclick="${decrement}"><img src="https://svgshare.com/i/hLt.svg"/></div> 
                <p class="">${counter}/10</p>
                <div class="btnExit inlineFlex scale" onclick="${startOver}"><img src="https://svgshare.com/i/hLZ.svg"/></div>        
            </div>`
    }


        // Progress bar
        const progress =()=>{
            useEffect(()=>
            {
            let line = document.querySelector(".line");
            const maxCounter = 10;
            line.animate([
               // keyframes
               { left: (counterPrev)*(375/maxCounter)-375 + "px" /*Линия с прошлого слайда*/},
               { left: counter*(375/maxCounter)-375 + "px" }
             ], {
               // timing options
               duration: 800
             });
             line.style.left =  counter*(375/maxCounter)-375 + "px";
            })
            return html`<div class="lineGray"/><div class="line"/>`
    }


        return html`
        <div class="upbar">
            <${header}/>
            <${progress}/>
        </div>`
    }


    const headerText = ({text}) =>{
        return html`<div class="headerText">
          <p>${text}</p>
        </div>`
      }

    
    const choiceButton = ({imgSource, text, style, onclick, imgHeight}) =>{
        const image = ()=>{
            return html`<img style="height: ${imgHeight};" alt="${text}" src="${imgSource}" />`
        }
        return html`
            <div class="choiceBtn link" style="${style}" onClick="${onclick}">
                ${(()=>{return imgSource && html`<${image}/>`})()}                    
                <p>${text}</p>
            </div>
        `;
      }

    
    // Screen container
    const main = ()=>{
        const screens = [screen1, screen2, screen3, screen3_2 ]

        return html`
        <div class="main"><${screens[counter-1]}/></div>`
    }

    
    // Screen 1
    const screen1 = ()=>{
        return html`
        <${headerText} text="You are looking for"/>
        <${choiceButton}  style="margin-top: 24px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJc.svg'}" imgHeight="43.18px"}} 
         text="Men's Styles" onclick=${()=>{console.log('5')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJb.svg'}" imgHeight="43.18px"}} 
         text="Men's Styles" onclick=${()=>{console.log('4')}}/>`
    }


    // Screen 2
    const screen2 = ()=>{
        return html`
        <div>screen2</div>`
    }


    // Screen 3
    const screen3 = ()=>{
        return html`
        <div>screen3</div>`
    }


    // Screen 3.2
    const screen3_2 = ()=>{
        return html`
        <div>screen3.2</div>`
    }


    
    return html`
    ${styles}
    ${(()=>{return counter==0 && html`<${screen0}/>`})()}
    ${(()=>{return counter>0 && html`<${upbar}/><${main}/>`})()}
    
    `;
};


// Отрисовка виджета в нужный контейнер
render(h(Widget), document.querySelector('#glasses-quiz-widget'));