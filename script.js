import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState, useCallback, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from "https://unpkg.com/htm@latest/dist/htm.module.js?module";

const html = htm.bind(h);


// Counter
function useCounter(){
    const [counter, setCounter] = useState(0);
    const [counterPrev, setCounterPrev] = useState(0);
    const savePrev = ()=>{
        setCounterPrev(counter);
    } 
    const increment = useCallback(()=>{
        savePrev.call();
        setCounter(counter+1)
    }, [counter])
    const decrement = useCallback(()=>{
        savePrev.call();
        setCounter(counter-1)
    }, [counter])
    const startOver = useCallback(()=>{
        savePrev.call();
        setCounter(0)
    }, [counter])
    return {counter, counterPrev, increment, decrement, startOver}
}


// Url object
function useUrl(){
    const [urlObject, setUrlObject] = useState({
        gender: '',
        eyewear_type: '',
        lenstype: '',
        frame_size: '',
        blue_light: '',
        shade: '',
        face_shape: '',
        facial_features: '',
        shape: '',
        brand: ''
    });
    const updateUrlObjValue = (key, val)=>{
        const obj = {}
        obj[key] = val
        const updatedValue ={...urlObject, ...obj}
        setUrlObject(updatedValue);
    }
    return {updateUrlObjValue, urlObject}
    
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
        .bottomLink{
            position: absolute;
            bottom: 24px;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            text-decoration-line: underline;
            color: #3A4850;
            transition: 1s;
        }
        .bottomLink:hover{
            color:#45C9FF;
            transition: 0.3s;
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
            position: relative;
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


        @-webkit-keyframes animate-svg-stroke-1 {
        0% {
            stroke-dashoffset: 415.2403564453125px;
            stroke-dasharray: 415.2403564453125px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 415.2403564453125px;
        }
        }

        @keyframes animate-svg-stroke-1 {
        0% {
            stroke-dashoffset: 415.2403564453125px;
            stroke-dasharray: 415.2403564453125px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 415.2403564453125px;
        }
        }

        @-webkit-keyframes animate-svg-fill-1 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(247, 248, 249);
        }
        }

        @keyframes animate-svg-fill-1 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(247, 248, 249);
        }
        }

        .svg-elem-1 {
        -webkit-animation: animate-svg-stroke-1 2s cubic-bezier(1, 0, 0, 1) 0s both,
                            animate-svg-fill-1 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
                animation: animate-svg-stroke-1 2s cubic-bezier(1, 0, 0, 1) 0s both,
                    animate-svg-fill-1 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
        }

        @-webkit-keyframes animate-svg-stroke-2 {
        0% {
            stroke-dashoffset: 107.23650360107422px;
            stroke-dasharray: 107.23650360107422px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 107.23650360107422px;
        }
        }

        @keyframes animate-svg-stroke-2 {
        0% {
            stroke-dashoffset: 107.23650360107422px;
            stroke-dasharray: 107.23650360107422px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 107.23650360107422px;
        }
        }

        @-webkit-keyframes animate-svg-fill-2 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(33, 150, 243);
        }
        }

        @keyframes animate-svg-fill-2 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(33, 150, 243);
        }
        }

        .svg-elem-2 {
        -webkit-animation: animate-svg-stroke-2 2s cubic-bezier(1, 0, 0, 1) 0.12s both,
                            animate-svg-fill-2 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
                animation: animate-svg-stroke-2 2s cubic-bezier(1, 0, 0, 1) 0.12s both,
                    animate-svg-fill-2 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
        }

        @-webkit-keyframes animate-svg-stroke-3 {
        0% {
            stroke-dashoffset: 206.29293823242188px;
            stroke-dasharray: 206.29293823242188px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 206.29293823242188px;
        }
        }

        @keyframes animate-svg-stroke-3 {
        0% {
            stroke-dashoffset: 206.29293823242188px;
            stroke-dasharray: 206.29293823242188px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 206.29293823242188px;
        }
        }

        @-webkit-keyframes animate-svg-fill-3 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(33, 150, 243);
        }
        }

        @keyframes animate-svg-fill-3 {
        0% {
            fill: transparent;
        }

        100% {
            fill: rgb(33, 150, 243);
        }
        }

        .svg-elem-3 {
        -webkit-animation: animate-svg-stroke-3 2s cubic-bezier(1, 0, 0, 1) 0.24s both,
                            animate-svg-fill-3 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
                animation: animate-svg-stroke-3 2s cubic-bezier(1, 0, 0, 1) 0.24s both,
                    animate-svg-fill-3 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
        }

        @-webkit-keyframes animate-svg-stroke-4 {
        0% {
            stroke-dashoffset: 5.840003967285156px;
            stroke-dasharray: 5.840003967285156px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840003967285156px;
        }
        }

        @keyframes animate-svg-stroke-4 {
        0% {
            stroke-dashoffset: 5.840003967285156px;
            stroke-dasharray: 5.840003967285156px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840003967285156px;
        }
        }

        .svg-elem-4 {
        -webkit-animation: animate-svg-stroke-4 2s cubic-bezier(1, 0, 0, 1) 0.36s both,
                            animate-svg-fill-4 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
                animation: animate-svg-stroke-4 2s cubic-bezier(1, 0, 0, 1) 0.36s both,
                    animate-svg-fill-4 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
        }

        @-webkit-keyframes animate-svg-stroke-5 {
        0% {
            stroke-dashoffset: 5.840003967285156px;
            stroke-dasharray: 5.840003967285156px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840003967285156px;
        }
        }

        @keyframes animate-svg-stroke-5 {
        0% {
            stroke-dashoffset: 5.840003967285156px;
            stroke-dasharray: 5.840003967285156px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840003967285156px;
        }
        }

        .svg-elem-5 {
        -webkit-animation: animate-svg-stroke-5 2s cubic-bezier(1, 0, 0, 1) 0.48s both,
                            animate-svg-fill-5 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
                animation: animate-svg-stroke-5 2s cubic-bezier(1, 0, 0, 1) 0.48s both,
                    animate-svg-fill-5 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
        }

        @-webkit-keyframes animate-svg-stroke-6 {
        0% {
            stroke-dashoffset: 5.840000152587891px;
            stroke-dasharray: 5.840000152587891px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840000152587891px;
        }
        }

        @keyframes animate-svg-stroke-6 {
        0% {
            stroke-dashoffset: 5.840000152587891px;
            stroke-dasharray: 5.840000152587891px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840000152587891px;
        }
        }

        .svg-elem-6 {
        -webkit-animation: animate-svg-stroke-6 2s cubic-bezier(1, 0, 0, 1) 0.6s both,
                            animate-svg-fill-6 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
                animation: animate-svg-stroke-6 2s cubic-bezier(1, 0, 0, 1) 0.6s both,
                    animate-svg-fill-6 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
        }

        @-webkit-keyframes animate-svg-stroke-7 {
        0% {
            stroke-dashoffset: 5.840000152587891px;
            stroke-dasharray: 5.840000152587891px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840000152587891px;
        }
        }

        @keyframes animate-svg-stroke-7 {
        0% {
            stroke-dashoffset: 5.840000152587891px;
            stroke-dasharray: 5.840000152587891px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.840000152587891px;
        }
        }

        .svg-elem-7 {
        -webkit-animation: animate-svg-stroke-7 2s cubic-bezier(1, 0, 0, 1) 0.72s both,
                            animate-svg-fill-7 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
                animation: animate-svg-stroke-7 2s cubic-bezier(1, 0, 0, 1) 0.72s both,
                    animate-svg-fill-7 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
        }

        @-webkit-keyframes animate-svg-stroke-8 {
        0% {
            stroke-dashoffset: 5.839657545089722px;
            stroke-dasharray: 5.839657545089722px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839657545089722px;
        }
        }

        @keyframes animate-svg-stroke-8 {
        0% {
            stroke-dashoffset: 5.839657545089722px;
            stroke-dasharray: 5.839657545089722px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839657545089722px;
        }
        }

        .svg-elem-8 {
        -webkit-animation: animate-svg-stroke-8 2s cubic-bezier(1, 0, 0, 1) 0.84s both,
                            animate-svg-fill-8 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
                animation: animate-svg-stroke-8 2s cubic-bezier(1, 0, 0, 1) 0.84s both,
                    animate-svg-fill-8 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
        }

        @-webkit-keyframes animate-svg-stroke-9 {
        0% {
            stroke-dashoffset: 5.8398003578186035px;
            stroke-dasharray: 5.8398003578186035px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.8398003578186035px;
        }
        }

        @keyframes animate-svg-stroke-9 {
        0% {
            stroke-dashoffset: 5.8398003578186035px;
            stroke-dasharray: 5.8398003578186035px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.8398003578186035px;
        }
        }

        .svg-elem-9 {
        -webkit-animation: animate-svg-stroke-9 2s cubic-bezier(1, 0, 0, 1) 0.96s both,
                            animate-svg-fill-9 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
                animation: animate-svg-stroke-9 2s cubic-bezier(1, 0, 0, 1) 0.96s both,
                    animate-svg-fill-9 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
        }

        @-webkit-keyframes animate-svg-stroke-10 {
        0% {
            stroke-dashoffset: 5.839733123779297px;
            stroke-dasharray: 5.839733123779297px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839733123779297px;
        }
        }

        @keyframes animate-svg-stroke-10 {
        0% {
            stroke-dashoffset: 5.839733123779297px;
            stroke-dasharray: 5.839733123779297px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839733123779297px;
        }
        }

        .svg-elem-10 {
        -webkit-animation: animate-svg-stroke-10 2s cubic-bezier(1, 0, 0, 1) 1.08s both,
                            animate-svg-fill-10 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
                animation: animate-svg-stroke-10 2s cubic-bezier(1, 0, 0, 1) 1.08s both,
                    animate-svg-fill-10 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
        }

        @-webkit-keyframes animate-svg-stroke-11 {
        0% {
            stroke-dashoffset: 5.839805841445923px;
            stroke-dasharray: 5.839805841445923px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839805841445923px;
        }
        }

        @keyframes animate-svg-stroke-11 {
        0% {
            stroke-dashoffset: 5.839805841445923px;
            stroke-dasharray: 5.839805841445923px;
        }

        100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 5.839805841445923px;
        }
        }

        .svg-elem-11 {
        -webkit-animation: animate-svg-stroke-11 2s cubic-bezier(1, 0, 0, 1) 1.2s both,
                            animate-svg-fill-11 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
                animation: animate-svg-stroke-11 2s cubic-bezier(1, 0, 0, 1) 1.2s both,
                    animate-svg-fill-11 2s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
        }

        @keyframes fadeOut {
        0% {
            opacity:0;
        }

        100% {
            opacity:1;
        }
    }
        .anim2s{
            animation: fadeOut 1.5s cubic-bezier(1, 0, 0, 1) 1.2s both;
        }


    </style>`


    const {counter, counterPrev, increment, decrement, startOver} = useCounter()
    const {urlObject, updateUrlObjValue} = useUrl()
    

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


    const headerText = ({text, style}) =>{
        return html`<div class="headerText" style="${style}">
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


    // Bottom link
    const bottomLink = ({func, text})=>{
        return html`<div class="bottomLink link">
          <p onclick=${()=>{func()}}>${text}</p>
        </div>`;
    } 


    const like = ()=>{
        return html`
        <svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
        <g filter="url(#filter0_dd_1_3722)">
        <path class="svg-elem-1" fill-rule="evenodd" clip-rule="evenodd" d="M156.52 90.7601C156.52 127.078 127.078 156.52 90.7598 156.52C54.4415 156.52 24.9998 127.078 24.9998 90.7601C24.9998 54.4419 54.4415 25.0001 90.7598 25.0001C127.078 25.0001 156.52 54.4419 156.52 90.7601" fill="#F7F8F9"/>
        </g>
        <path class="svg-elem-2" fill-rule="evenodd" clip-rule="evenodd" d="M69.4106 85.0811L56.5706 88.5217C56.1078 88.6456 55.8328 89.1213 55.9571 89.584L65.4299 124.936C65.5538 125.4 66.0294 125.674 66.4922 125.55L79.3322 122.11C79.7954 121.986 80.0694 121.51 79.9451 121.048L70.4728 85.6941C70.349 85.2318 69.8733 84.9573 69.4106 85.0811" fill="#2196F3"/>
        <path class="svg-elem-3" fill-rule="evenodd" clip-rule="evenodd" d="M123.955 86.6398C123.367 84.4462 121.793 82.7801 119.838 81.9895C120.918 80.4247 121.332 78.4145 120.801 76.4335C119.841 72.8498 116.156 70.7225 112.572 71.683L109.38 72.5383C108.761 72.6626 108.124 72.8114 107.468 72.9876C98.9943 75.258 96.0044 76.0807 95.8272 76.1066C94.08 76.2084 92.4428 75.0756 91.9719 73.3188C91.9244 73.1407 91.5759 71.3974 91.5447 71.3494C91.0186 68.9335 90.2775 66.5407 89.2186 64.5478C87.2506 60.8474 85.2792 58.4474 83.6132 57.1942C83.5968 57.198 83.5781 57.1951 83.556 57.1802C82.8096 56.6729 81.8554 56.4814 80.9151 56.7329C79.4832 57.1169 78.54 58.4095 78.5343 59.8246C78.637 61.1196 78.8808 62.5433 78.9764 63.5801C80.3098 77.9191 74.7687 82.8324 73.118 86.275L73.0676 87.0737L81.565 118.788C95.0127 116.8 97.85 121.14 113.835 116.81L119.232 115.364L119.231 115.362C122.616 114.455 124.624 110.976 123.717 107.592C123.423 106.494 122.855 105.545 122.111 104.79C124.135 103.13 125.118 100.384 124.397 97.6913C123.957 96.0478 122.955 94.7047 121.655 93.81C123.694 92.1305 124.683 89.358 123.955 86.6398" fill="#2196F3"/>
        <path class="svg-elem-4" d="M98.228 56.7167H102.068" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-5" d="M104.948 56.7167H108.788" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-6" d="M103.508 51.4366V55.2766" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-7" d="M103.508 58.1566V61.9966" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-8" d="M56.9266 75.3916L59.6419 72.6768" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-9" d="M61.678 70.6399L64.3934 67.925" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-10" d="M56.9266 67.9249L59.6419 70.6398" stroke="#2196F3" stroke-width="1.2"/>
        <path class="svg-elem-11" d="M61.678 72.6766L64.3934 75.3915" stroke="#2196F3" stroke-width="1.2"/>
        <defs>
        <filter id="filter0_dd_1_3722" x="-0.000244141" y="0.00012207" width="181.52" height="181.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="9" dy="9"/>
        <feGaussianBlur stdDeviation="8"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.639216 0 0 0 0 0.694118 0 0 0 0 0.776471 0 0 0 0.325148 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3722"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-9" dy="-9"/>
        <feGaussianBlur stdDeviation="8"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1_3722" result="effect2_dropShadow_1_3722"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_3722" result="shape"/>
        </filter>
        </defs>
        </svg>`
    }

    
    // Screen container
    const main = ()=>{
        const screens = [screen1, screen2, screen2to3, screen3, screen3_2 ]

        return html`
        <div class="main"><${screens[counter-1]}/></div>`
    }

    
    // Screen 1
    const screen1 = ()=>{
        return html`
        <${headerText} text="You are looking for"/>
        <${choiceButton}  style="margin-top: 24px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJc.svg'}" imgHeight="43.18px"}} 
         text="Women's Styles" onclick=${()=>{updateUrlObjValue('gender', '5'); increment()}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJb.svg'}" imgHeight="43.18px"}} 
         text="Men's Styles" onclick=${()=>{updateUrlObjValue('gender', '4'); increment()}}/>
        <${bottomLink} func="${()=>{increment()}}" text="${"I'd like to see both"}"/>`
    }


    // Screen 2
    const screen2 = ()=>{
        let imgEyeglasses =''
        let imgSunglasses =''
        
        if (urlObject.gender=='5') {
           imgEyeglasses = 'https://svgshare.com/i/hLG.svg'
           imgSunglasses = 'https://svgshare.com/i/hKs.svg'

        }
        else{
            imgEyeglasses = 'https://svgshare.com/i/hMP.svg'
            imgSunglasses = 'https://svgshare.com/i/hKi.svg'
        }
        
        return html`
        <${headerText} text="What type of glasses are you looking for?" style="width: 250px"/>
        <${choiceButton}  style="margin-top: 32px; width: 274px; height: 138px;" imgSource="${imgEyeglasses}" imgHeight="20.23px"}} 
         text="Eyeglasses" onclick=${()=>{updateUrlObjValue('eyewear_type', '210'); increment()}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 138px;" imgSource="${imgSunglasses}" imgHeight="20.23px"}} 
         text="Sunglasses" onclick=${()=>{updateUrlObjValue('eyewear_type', '211'); increment()}}/>
        <${bottomLink} func="${()=>{console.log('4,5'); increment()}}" text="${"I want to see both"}"/>`
    }


    const screen2to3 = ()=>{
        return html`
        <${like}/>
        <p class="blueText anim2s">Let's get to know you!</p>`
        
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