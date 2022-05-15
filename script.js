import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState, useCallback, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from "https://unpkg.com/htm@latest/dist/htm.module.js?module";

const html = htm.bind(h);


// Url object for storing parameters


// Counter
function useCounter(){
    const [counter, setCounter] = useState(0);
    const increment = useCallback(()=>{
        setCounter(counter+1)
    }, [counter])
    const decrement = useCallback(()=>{
        setCounter(counter-1)
    }, [counter])
    const startOver = useCallback(()=>{
        setCounter(0)
    }, [counter])
    return {counter, increment, decrement, startOver}
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
        .screen0 .main{
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
            background-color: gray;
        }
        .upbar_header{
            background-color: beige;
        }
        .line{
            height: 8px;
        }
        #glasses-quiz-widget > .main{
            background-color: darkgray;
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


    const {counter, increment, decrement, startOver} = useCounter()
    

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
            <div class="upbar_header">back 1/10 exit
                <button onclick="${increment}"> inc</button>
            </div>`
    }


        // Progress bar
        const progress =()=>{
            return html`<div class="line"/>`
    }


        return html`
        <div class="upbar">
            <${header}/>
            <${progress}/>
        </div>`
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
        <div>screen1</div>`
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