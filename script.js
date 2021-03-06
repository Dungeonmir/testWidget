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
    const increment = useCallback((number)=>{
        let n = number;
        n = number==undefined?1:number
        savePrev.call();
        setCounter(counter+n)
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
function useScreenId(){
    const [screenId, setScreenId] = useState('')
    return {screenId, setScreenId};
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
        root:before {
        content:
                url(https://svgshare.com/i/hKp.svg)
                url(https://svgshare.com/i/hKV.svg)
                url(https://svgshare.com/i/hem.svg)
                url(https://gcdnb.pbrd.co/images/TnQguHrp8hEb.png?o=1)
                url(https://svgshare.com/i/hLt.svg)
                url(https://svgshare.com/i/hLZ.svg)
                url(https://svgshare.com/i/hJc.svg)
                url(https://svgshare.com/i/hJb.svg)
                url(https://svgshare.com/i/hLG.svg)
                url(https://svgshare.com/i/hKs.svg)
                url(https://svgshare.com/i/hMP.svg)
                url(https://svgshare.com/i/hKi.svg)
                url(https://svgshare.com/i/hVp.svg)
                url(https://svgshare.com/i/hZv.svg)
                url(https://svgshare.com/i/hZ3.svg)
                url(https://svgshare.com/i/hZe.svg)
                url(https://svgshare.com/i/h_7.svg)
                url(https://svgshare.com/i/hag.svg)
                url(https://svgshare.com/i/ha3.svg)
                url(https://svgshare.com/i/haX.svg)
                url(https://svgshare.com/i/hZv.svg)
                url(https://svgshare.com/i/hbK.svg)
                url(https://svgshare.com/i/haG.svg)
                url(https://svgshare.com/i/haH.svg)
                url(https://svgshare.com/i/hdX.svg)
                url(https://svgshare.com/i/heo.svg)
                url(https://svgshare.com/i/hf7.svg)
                url(https://svgshare.com/i/hf8.svg)
                url(https://svgshare.com/i/hdY.svg)
                url(https://svgshare.com/i/hew.svg)
                url(https://svgshare.com/i/heb.svg)
                url(https://svgshare.com/i/hdK.svg)
                url(https://svgshare.com/i/hd2.svg)
                url(https://svgshare.com/i/hi5.svg)
                url(https://svgshare.com/i/hic.svg)
                url(https://svgshare.com/i/hh_.svg)
                url(https://svgshare.com/i/hgs.svg)
                url(https://svgshare.com/i/hid.svg)
                url(https://svgshare.com/i/hiU.svg)
                url(https://svgshare.com/i/hiV.svg)
                url(https://svgshare.com/i/hhb.svg)
                url(https://svgshare.com/i/hie.svg)
                url(https://svgshare.com/i/hgt.svg)
                url(https://svgshare.com/i/hiq.svg)
                url(https://svgshare.com/i/hj7.svg)
                url(https://svgshare.com/i/hKp.svg)
                url(https://svgshare.com/i/hLZ.svg)
                url(https://svgshare.com/i/hhX.svg);
         

        visibility: hidden;
        position: absolute;
        left: -999em;
        }
                
        p{
            margin:0;
            padding: 0;
        }
        #glasses-quiz-widget{
            width: max-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: white;
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
            width: 375px;
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
        #glasses-quiz-widget{
            overflow: hidden;
            user-select: none;
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
            width: 60px;
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
        .startNow{
            position: absolute;
	        bottom: 122px;
            height: 48px;
            width: 177px;
        }
        .btnBlue{
            height: 48px;
            width: 181px;
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
        .subtitleText{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: #697580;
            margin-top: 10px; 
        }
        .choiceContainer{
            cursor: grab;
            width: 375px;
            overflow-x: scroll;
        }
        .choiceMenu{
            width:  679.5px;
            height:337.36px;
            margin: 10px 12px;
        }
        .choiceContainer {
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
        }
        .choiceContainer::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
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
            border-radius: 0px 4px 4px 0px;
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
        .choiceItemClicked{
            position: relative;
            border: 1px solid #45C9FF;
        }
        .choiceItemClicked::after{
            position: absolute;
            width: 20px;
            height: 20px;
            content: '';
            float: right;
            z-index:2;
            right: -7px;
            top: -7px;
            background-image: url('https://svgshare.com/i/hem.svg');
        }
        @media only screen and (min-width: 700px) {
            .screen0 .main{
            width: 100%;
            height: 100%;
            }
            .btnBlue{
                height: 60px;
                width: 235px;
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
                animation: animate-svg-stroke-1 2s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-1 1.2s cubic-bezier(0.47, 0, 0.745, 0.715)  both;
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
                animation: animate-svg-stroke-2 1.88s cubic-bezier(1, 0, 0, 1) both,
                    animate-svg-fill-2 1.1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-3 1.76s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-3 1s cubic-bezier(0.47, 0, 0.745, 0.715)  both;
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
                animation: animate-svg-stroke-4 1.64s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-4 0.9s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-5 1.52s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-5 0.8s cubic-bezier(0.47, 0, 0.745, 0.715)  both;
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
                animation: animate-svg-stroke-6 1.4s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-7 1.28s cubic-bezier(1, 0, 0, 1) both,
                    animate-svg-fill-7 0.6s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-8 1.16s cubic-bezier(1, 0, 0, 1) both,
                    animate-svg-fill-8 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)  both;
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
                animation: animate-svg-stroke-9 1.04s cubic-bezier(1, 0, 0, 1) both,
                    animate-svg-fill-9 0.4s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-10 0.92s cubic-bezier(1, 0, 0, 1)  both,
                    animate-svg-fill-10 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
                animation: animate-svg-stroke-11 0.8s cubic-bezier(1, 0, 0, 1) both,
                    animate-svg-fill-11 0.2s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
            animation: fadeOut 1.5s cubic-bezier(1, 0, 0, 1)  both;
        }
        .fadeOut{
            animation: fadeOut 0.5s ease-in both;
        }


    </style>`

    const {counter, counterPrev, increment, decrement, startOver} = useCounter()
    const {urlObject, updateUrlObjValue} = useUrl()
    const {screenId, setScreenId} = useScreenId()

    // Screen 0 func
    const screen0  = ()=>{
        const nextPage = ()=>{
            increment();
            setScreenId('screen1');
        }

        //Logo and next page arrow
        const header  = ()=>{
            return html`<div class="header">
            <div class="logo">
                <img src="https://svgshare.com/i/hKp.svg"/>
            </div>
            <div class="arrow_right" onclick="${nextPage}">
                <img src="https://svgshare.com/i/hKV.svg"/>
            </div>
            </div>`
        }


        // Start now button
        const main = ()=>{
            return html`<div class="main">
            <img class="glassesImg" src="https://gcdnb.pbrd.co/images/TnQguHrp8hEb.png?o=1" height="153" width="312"/>
            <p class="blueText">Let’s find your perfect pair!</p>
            <p class="blackText">Take the quiz to easily discover your perfect fit from thousands of styles</p>
            <button class="btnBlue link startNow" onclick="${nextPage}">Start now</button>
            </div>`
        }


        return html`
        <div class="screen0 anim2s">
            <${header}/>
            <${main}/>
        </div>`
    }


    // Upbar
    const upbar = ()=>{


        // Header upper part of upbar
        // Back button, Close button, Start over
        const header = ()=>{
            const previousPage = ()=>{
                const decCounter = counter - 1
                decrement();
                setScreenId('screen' + decCounter)
            }
            return html`
            <div class="upbar_header">
                <div class="btnBack inlineFlex scale link" onclick="${previousPage}"><img src="https://svgshare.com/i/hLt.svg"/></div> 
                <p class="">${counter}/10</p>
                <div class="btnExit inlineFlex scale link" onclick="${startOver}"><img src="https://svgshare.com/i/hLZ.svg"/></div>        
            </div>`
    }


        // Progress bar
        const progress =()=>{
            useEffect(()=>
            {
            let line = document.querySelector(".line");
            const maxCounter = 10;
            if(counter<10){
                line.animate([
                    // keyframes
                    { left: (counterPrev)*(375/maxCounter)-375 + "px" /*Линия с прошлого слайда*/},
                    { left: counter*(375/maxCounter)-375 + "px" }
                  ], {
                    // timing options
                    duration: 800
                  });
                  line.style.left =  counter*(375/maxCounter)-375 + "px";
                 }
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
    

    const subtitleText = ({text, style}) =>{
        return html`<div class="subtitleText" style="${style}">
          <p>${text}</p>
        </div>`
      }

    const choiceMenu = ({choiceCards, style})=>{
        
        useEffect(()=>{   
            slider();
            makeSelection();
            })
            const makeSelection = ()=>{
                let menu = document.querySelector('.choiceMenu');
                for (let i = 0; i < menu.children.length; i++) {
                    let option = menu.children.item(i)
                    option.addEventListener(
                       'click', ()=>{
                            option.classList.contains('choiceItemClicked')?
                            option.classList.remove('choiceItemClicked'):
                            option.classList.add('choiceItemClicked');
                        }
                    )
                    
                }
            }
            const slider = ()=>{
                const slider = document.querySelector('.choiceContainer');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            
            });
            slider.addEventListener('mouseleave', () => {
            isDown = false;
            });
            slider.addEventListener('mouseup', () => {
            isDown = false;
            });
            slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const scroll = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - scroll;
            });
            }
        return html`
        <div class="choiceContainer">
            <div class="choiceMenu" style="${style}" >
                ${choiceCards?.map((card)=>{
                    return html`
                    <${choiceButton} imgSource="${card.img}" imgHeight="${card.imgHeight}" text="${card.text}"
                    style="${card.style}" onclick="${card.onclick}"/>
                    `
                })}
            </div>
        </div>

        `
    }

    
    const choiceButton = ({imgSource, text, style, onclick, imgHeight, text2, imgSource2, textStyle}) =>{
        const image = ()=>{
            return html`<img style="height: ${imgHeight};" alt="${text}" src="${imgSource}" />`
        }
        const textComponent = ()=>{
            return html `
            <p style=${textStyle}>${text}</p>
            `
        }
        return html`
            <div class="choiceBtn link" style="${style}" onClick="${onclick}">
                ${(()=>{return imgSource && html`<${image}/>`})()}    
                ${(()=>{return imgSource2 && html`<img src="${imgSource2}"/>`})()}                 
                ${(()=>{return text && html `<${textComponent}/>`})()}
                ${(()=>{return text2 && html`<p style="font-weight: 700; font-size: 18px; line-height: 25px; color: #0F0F0F;">${text2}</p>`})()}  
            </div>
        `;
      }


    // Bottom link
    const bottomLink = ({func, text})=>{
        return html`<div class="bottomLink link">
          <p onclick=${()=>{func()}}>${text}</p>
        </div>`;
    } 


    


    // Like hand icon svg
    const like = ()=>{
        return html`
        <svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg" class="likeAnimation">
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
        const screens = {screen1,screen2, screen2to3, screen3, screen3_2, screen4, screen4to4_2,
                        screen4_2, screen5,screen5_eyeglasses, screen5_sunglasses, screen6, 
                        screen7, screen8, screen9, screen10, screen11 }
        return html`
        <div class="main fadeOut"><${screens[screenId]}/></div>`
    }

    
    // Screen 1
    const screen1 = ()=>{
        const nextPage = (data) =>{
            updateUrlObjValue('gender', data);
            increment();
            setScreenId('screen2');
        }
        return html`
        <${headerText} text="You are looking for"/>
        <${choiceButton}  style="margin-top: 24px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJc.svg'}" imgHeight="43.18px"}} 
         text="Women's Styles" onclick=${()=>{nextPage('5')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 138px;" imgSource="${'https://svgshare.com/i/hJb.svg'}" imgHeight="43.18px"}} 
         text="Men's Styles" onclick=${()=>{nextPage('4')}}/>
        <${bottomLink} func="${()=>{nextPage('')}}" text="${"I'd like to see both"}"/>`
    }


    // Screen 2
    const screen2 = ()=>{
        const nextPage = (data) =>{
            updateUrlObjValue('eyewear_type', data);
            increment();
            setScreenId('screen2to3')
        }
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
        <${choiceButton}  style="margin-top: 32px; width: 274px; height: 138px;" 
        imgSource="${imgEyeglasses}" imgHeight="20.23px"
         text="Eyeglasses" onclick=${()=>{nextPage('210')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 138px;" 
        imgSource="${imgSunglasses}" imgHeight="20.23px" 
         text="Sunglasses" onclick=${()=>{nextPage('211')}}/>
        <${bottomLink} func="${()=>{nextPage('')}}" text="${"I want to see both"}"/>`

    }


    const screen2to3 = ()=>{        
        //Changed timeout to 3.5s for future fade out transition
        setTimeout(()=>setScreenId('screen3'), '2000')
        return html`
        <${like}/>
        <p class="blueText anim2s">Let's get to know you!</p>`
        
    }


    // Screen 3
    const screen3 = ()=>{
        const nextPage = ()=>{
            increment();
            setScreenId('screen4');
        }
        return html`
        <${headerText} text="Do you need vision correction?"/>
        <${choiceButton}  style="margin-top: 32px; width: 274px; height: 120px;" imgHeight="20.23px"
         text="Yes" onclick=${()=>{setScreenId('screen3_2')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 274px; height: 120px;" imgHeight="20.23px"
         text="No" onclick=${()=>{nextPage()}}/>
        <${bottomLink} func="${()=>{nextPage()}}" text="${"Skip"}"/>`
    }


    // Screen 3.2
    const screen3_2 = ()=>{
        const nextPage = (data)=>{
            updateUrlObjValue('lenstype', data)
            increment();
            setScreenId('screen4');
           
        }
        return html`
        <${headerText} text="What do you need your glasses for?" style="width: 250px"/>
        <${choiceButton}  style="margin-top: 32px; width: 294px; height: 84px;" imgHeight="20.23px"
         text="Near Vision" onclick=${()=>{nextPage('6')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 294px; height: 84px;" imgHeight="20.23px"
         text="Distance Vision" onclick=${()=>{nextPage('6')}}/>
         <${choiceButton}  style="margin-top: 14px; width: 294px; height: 84px;" imgHeight="20.23px"
         text="Multifocal / Progressive" onclick=${()=>{nextPage('7')}}/>
        <${bottomLink} func="${()=>{nextPage('')}}" text="${"Skip"}"/>`
    }

    const screen4 = () =>{
        const nextPage = (data)=>{
            increment();
            updateUrlObjValue('frame_size', data)
            setScreenId('screen5');
        }
        return html`
        <${headerText} text="What’s your current frame size?" style="width: 250px"/>
        <img src="https://svgshare.com/i/hVp.svg" alt="Frame image" style="margin-top: 38px;"/>
        <${choiceButton}  style="margin-top: 35px; width: 318px; height: 56px;
        display: flex;flex-direction: row;justify-content: space-around;align-items: center;"
         text="Small" text2="42-48 mm" onclick=${()=>{nextPage('68')}}/>
        <${choiceButton}  style="margin-top: 12px; width: 318px; height: 56px;
        display: flex;flex-direction: row;justify-content: space-around;align-items: center;"
         text="Medium" text2="49-53 mm" onclick=${()=>{nextPage('67')}}/>
         <${choiceButton}  style="margin-top: 12px; width: 318px; height: 56px;
         display: flex;flex-direction: row;justify-content: space-around;align-items: center;"
         text="Large" text2="54-58 mm" onclick=${()=>{nextPage('66')}}/>
        <${bottomLink} func="${()=>{updateUrlObjValue('frame_size', '');setScreenId('screen4to4_2')}}" text="${"I don’t know"}"/>`
    }


    const screen4to4_2 = ()=>{
        setTimeout(()=>setScreenId('screen4_2'), '2000')
        return html`
        <${like}/>
        <p class="blueText anim2s">No worries, we’ve got you!</p>`
    }

    const screen4_2 = ()=>{
        const nextPage = (data)=>{
            increment()
            updateUrlObjValue('frame_size', data)
            setScreenId('screen5');
        }
        return html`
        <${headerText} text="How wide would you say your face is?" style="width: 250px"/>
        <${choiceButton}  style="margin-top: 32px; width: 304px; height: 84px;" imgHeight="20.23px"
         text="Wider Than Average" onclick=${()=>{nextPage('66')}}/>
        <${choiceButton}  style="margin-top: 11px; width: 294px; height: 84px;" imgHeight="20.23px"
         text="Average" onclick=${()=>{nextPage('67')}}/>
         <${choiceButton}  style="margin-top: 11px; width: 294px; height: 84px;" imgHeight="20.23px"
         text="Narrower Than Average" onclick=${()=>{nextPage('68')}}/>
        <${bottomLink} func="${()=>{nextPage('')}}" text="${"I’m not sure"}"/>`
    }


    const screen5 = ()=>{
        urlObject.eyewear_type=='211'     ? 
        setScreenId('screen5_sunglasses') : 
        setScreenId('screen5_eyeglasses')
    }

    const screen5_eyeglasses = ()=>{
        const nextPage = (data)=>{
            updateUrlObjValue('blue_light', data);
            increment();
            setScreenId('screen6');
        }
        return html`
        <${headerText} text="Would you like to protect your eyes 
        from light emanating from screens?" style="width: 330px"/>
        <${choiceButton}  style="margin-top: 32px; width: 273px; height: 138px;"
         text="Yes" onclick=${()=>{nextPage('true')}}/>
        <${choiceButton}  style="margin-top: 14px; width: 273px; height: 138px;" 
         text="No" onclick=${()=>{nextPage('false')}}/>
        `
    }


    const screen5_sunglasses = ()=>{ 
       
        const nextPage = (data)=>{
            increment();
            updateUrlObjValue('shade', data)
            setScreenId('screen6');
        }

        const btnStyle = `width: 304px; height: 89px; display: flex; 
        flex-direction: row; justify-content: space-around; align-items: center;`

        const textStyle = `width: 176.61px; text-align: left`;
        const rectagleSource = 'https://svgshare.com/i/hZv.svg'


        return html`
        
        <${headerText} text="When you’re out and about, which shade of lenses do you prefer?" 
        style="width: 312px"/>
        <${choiceButton}  style="${btnStyle}margin-top: 32px;" imgSource="${'https://svgshare.com/i/hZ3.svg'}" imgSource2="${rectagleSource}"
         text="Dark Shade" onclick=${()=>{nextPage('dark')}} textStyle="${textStyle}"/>
        <${choiceButton}  style="${btnStyle}margin-top: 16px;"  imgSource="${'https://svgshare.com/i/hZe.svg'}" imgSource2="${rectagleSource}"
         text="Light Shade" onclick=${()=>{nextPage('light')}} textStyle="${textStyle}"/>
         <${choiceButton} style="${btnStyle}margin-top: 16px;"  imgSource="${'https://svgshare.com/i/h_7.svg'}" imgSource2="${rectagleSource}"
         text="Transitioning Shade" onclick=${()=>{nextPage('transition')}} textStyle="${textStyle}"/>
        `
    }

    
    const screen6 = ()=>{    
        const nextPage = (data)=>{
            increment();
            updateUrlObjValue('face_shape', data)
            setScreenId('screen7');
        }    
        const imgGender = {
            '4': 'https://svgshare.com/i/hag.svg',
            '5': 'https://svgshare.com/i/ha3.svg',
            '' : "https://svgshare.com/i/haX.svg"
        }
        const btnStyle = `width: 314px; height: 89px; display: flex; 
        flex-direction: row; justify-content: space-around; align-items: center;`

        const textStyle = `width: 176.61px; text-align: left`;
        const rectagleSource = 'https://svgshare.com/i/hZv.svg'


        return html`
        
        <${headerText} text="Every face shape has a perfect fit. What’s yours?" 
        style="width: 240px"/>
        <${choiceButton}  style="${btnStyle} margin-top: 32px;" 
        imgSource="${imgGender[urlObject.gender]}" imgSource2="${rectagleSource}"
         text="I have a long face" onclick=${()=>{nextPage('long')}} textStyle="${textStyle}"/>
        <${choiceButton}  style="${btnStyle} margin-top: 14px;"  
        imgSource="${imgGender[urlObject.gender]}" imgSource2="${rectagleSource}"
         text="I have a round face" onclick=${()=>{nextPage('round')}} textStyle="${textStyle}"/>
         <${choiceButton} style="${btnStyle}margin-top: 14px;"  
         imgSource="${imgGender[urlObject.gender]}" imgSource2="${rectagleSource}"
         text="In between" onclick=${()=>{nextPage('between')}} textStyle="${textStyle}"/>
         <${bottomLink} func="${()=>{nextPage('')}}" text="${"I don’t know"}"/>
         `
    }
    

    const screen7 = ()=>{
        const nextPage = (data)=>{
            increment();
            updateUrlObjValue('facial_features', data)
            setScreenId('screen8');
        }  
        const btnStyle = `width: 314px; height: 97px;`
        return html`
        <${headerText} text="How would you define your facial features?" style="width: 240px"/>
        <${choiceButton}  style="${btnStyle} margin-top: 32px;"
         text="Sharp" onclick=${()=>{nextPage('sharp')}}/>
        <${choiceButton}  style="${btnStyle} margin-top: 14px;"
         text="Rounded" onclick=${()=>{nextPage('rounded')}}/>
         <${choiceButton}  style="${btnStyle} margin-top: 14px;"
         text="In between" onclick=${()=>{nextPage('between')}}/>
        <${bottomLink} func="${()=>{nextPage('')}}" text="${"I don’t know"}"/>
        `
    }


    let items = []
    const addItem=(value)=>{
        let itemUnique =true;
        items = items.filter((item)=>{
            if(item==value)itemUnique=false
            return item!=value
        })
        if (itemUnique) {
            items.push(value)
        }
        let btn = document.querySelector('.btnBlue');        
        btn.style.background = items.length==0?'#DEDEDE':'linear-gradient(270deg, #45C7FA 0%, #2196F3 100%)'
    }


    const screen8 = ()=>{
        const menuStyle =  `display: flex; flex-direction: row; flex-wrap: wrap;justify-content: center; align-items: center; gap: 10px`
        const cardStyle = `width: 159.74px;height: 102.9px;font-size: 13.72px;line-height: 14px;
        box-shadow: 0px 1px 0px rgba(58, 72, 80, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.08);
        border-radius: 13.72px; justify-content: flex-start;
        `
        
        const cards=[
            {
                text: "Rectangle",
                img: "https://svgshare.com/i/hbK.svg",
                style: cardStyle,
                onclick: ()=>{addItem('rectangle')},
                imgHeight: "64.19"
            },
             {
                text: "Browline",
                img: "https://svgshare.com/i/haG.svg",
                style: cardStyle,
                onclick: ()=>{addItem('browline')},
                imgHeight: "64.19"
            },
             {
                text: "Aviator",
                img: "https://svgshare.com/i/haH.svg",
                style: cardStyle,
                onclick: ()=>{addItem('aviator')},
                imgHeight: "64.19"
            },
            {
                text: "Geometric",
                img: "https://svgshare.com/i/hdX.svg",
                style: cardStyle,
                onclick: ()=>{addItem('geometric')},
                imgHeight: "64.19"
            },
             {
                text: "Wayframe",
                img: "https://svgshare.com/i/heo.svg",
                style: cardStyle,
                onclick: ()=>{addItem('wayframe')},
            },
             {
                text: "Round",
                img: "https://svgshare.com/i/hf7.svg",
                style: cardStyle,
                onclick: ()=>{addItem('round')},
            },
            {
                text: "Oval",
                img: "https://svgshare.com/i/hf8.svg",
                style: cardStyle,
                onclick: ()=>{addItem('oval')},
                imgHeight: "64.19"
            },
             {
                text: "Oversized",
                img: "https://svgshare.com/i/hdY.svg",
                style: cardStyle,
                onclick: ()=>{addItem('oversized')},
            },
             {
                text: "Cat Eye",
                img: "https://svgshare.com/i/hew.svg",
                style: cardStyle,
                onclick: ()=>{addItem('cat_eye')},
            },
            {
                text: "Rimless",
                img: "https://svgshare.com/i/heb.svg",
                style: cardStyle,
                onclick: ()=>{addItem('rimless')},
                imgHeight: "64.19"
            },
             {
                text: "Square",
                img: "https://svgshare.com/i/hdK.svg",
                style: cardStyle,
                onclick: ()=>{addItem('square')},
            },
             {
                text: "Wrap",
                img: "https://svgshare.com/i/hd2.svg",
                style: cardStyle,
                onclick: ()=>{addItem('wrap')},
            },
        ]

        const continueClicked = ()=>{
            if(!items.length==0){
                updateUrlObjValue('shape', items.join(','));
                items=[];
                increment();
                setScreenId('screen9');
            }
           
        }

        return html`
        <${headerText} text="Which frame style are you looking for?" style="width: 341px"/>
        <${subtitleText} text="You can pick more than one."/>
        <${choiceMenu} choiceCards="${cards}" style="${menuStyle}"/>
        <button class="link btnBlue"  onclick="${continueClicked}" style="margin-top: 25px;background:#DEDEDE;">Continue</button>
        `
    }


    const screen9 = ()=>{
        const btnStyle =   `
        width: 274px;
        height: 120px;`
        
        return html`
        <${headerText} text="Are you looking for any particular eyewear brands?" style="width: 254px"/>
        <${choiceButton}  style="${btnStyle} margin-top: 32px;"
         text="Yes, I have some in mind" onclick=${()=>{setScreenId('screen10');increment();}}/>
         <${choiceButton}  style="${btnStyle} margin-top: 16px;"
         text="No, brand isn't important" onclick=${()=>{increment(2);}}/>
        `
    }


    const screen10 = ()=>{
        useEffect(()=>
            {
            let line = document.querySelector(".line");
            
            let maxCounter = 10;
                line.animate([
                    // keyframes
                    { left: (counterPrev)*(375/maxCounter)-375 + "px" /*Линия с прошлого слайда*/},
                    { left: counter*(375/maxCounter)-385 + "px" }
                ], {
                    // timing options
                    duration: 800
                });
                line.style.left =  counter*(375/maxCounter)-385 + "px";
            })

        const menuStyle =  `display: flex; flex-direction: row; flex-wrap: wrap;justify-content: center; align-items: center; gap: 10px`
        const cardStyle = `width: 159.74px;height: 102.9px;font-size: 13.72px;line-height: 14px;
            box-shadow: 0px 1px 0px rgba(58, 72, 80, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.08);
            border-radius: 13.72px; justify-content: center;
            `
            
        const cards=[
                {
                    img: "https://svgshare.com/i/hi5.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('ray_ban')},
                },
                {
                    img: "https://svgshare.com/i/hic.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('oakley')},
                },
                {
                    img: "https://svgshare.com/i/hh_.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('gucci')},
                },
                {
                    img: "https://svgshare.com/i/hgs.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('armani_exchange')},
                },
                {
                    img: "https://svgshare.com/i/hid.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('hilary_duff')},
                },
                {
                    img: "https://svgshare.com/i/hiU.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('prada')},
                },
                {
                    img: "https://svgshare.com/i/hiV.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('versace')},
                },
                {
                    img: "https://svgshare.com/i/hhb.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('vogue')},
                },
                {
                    img: "https://svgshare.com/i/hie.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('michael_kors')},
                },
                {
                    img: "https://svgshare.com/i/hgt.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('coach')},
                },
                {
                    img: "https://svgshare.com/i/hiq.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('tory_burch')},
                },
                {
                    img: "https://svgshare.com/i/hj7.svg",
                    style: cardStyle,
                    onclick: ()=>{addItem('burberry')},
                },
                
                
                
            ]
    
            const continueClicked = ()=>{
                if(!items.length==0){
                    updateUrlObjValue('brand', items.join(','));
                    items=[];
                    increment();
                    setScreenId('screen9');
                }
               
            }
        return html`
        <${headerText} text="Choose your favorite brands" style="width: 314px"/>
        <${subtitleText} text="You can pick more than one."/>
        <${choiceMenu} choiceCards="${cards}" style="${menuStyle}"/>
        <button class="link btnBlue"  onclick="${continueClicked}" style="margin-top: 25px;background:#DEDEDE;">Continue</button>

        `
    }


    const screen11 = ()=>{
        const upbar = ()=>{


            // Header upper part of upbar
            // Back button, Close button, Start over
            const header = ()=>{
               
                return html`
                <div class="upbar_header">
                <div class="logo">
                    <img src="https://svgshare.com/i/hKp.svg"/>
                </div>
                    <div class="btnExit inlineFlex scale link" onclick="${startOver}"><img src="https://svgshare.com/i/hLZ.svg"/></div>        
                </div>`
        }
    
    
            // Progress bar
            const progress =()=>{
                useEffect(()=>
                {
                let line = document.querySelector(".line");
                line.style.left = '0px'
                
                })
                return html`<div class="lineGray"/><div class="line"/>`
        }
    
    
            return html`
            <div class="upbar">
                <${header}/>
                <${progress}/>
            </div>`
        }
        const body = ()=>{
            const grayText = `
            width: 286px;
            height: 28px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            color: #5B6971;
            margin-top: 98px`
            const send = ()=>{
                let string = document.querySelector('#glasses-quiz-widget').dataset.source+"?"
                for(let key in urlObject){
                    if(urlObject[key]!=""){
                        string+=key + "=" + urlObject[key]+"&"
                    }
                }
                string = string.slice(0, -1);
                console.log(string);
            }
            return html`
            <div class="main fadeOut">
                <img class="present anim2s" src="https://svgshare.com/i/hhX.svg" style="margin-top: 38px"/>
                <p class="blueText" style="width: 314px; font-size: 20px;">We've found some awesome frames for you!</p>
                <p class="blackText" style="font-size: 16px; line-height: 150%; margin-top: 12px; width: 344px">Send the results to your email to receive special discounts.</p>
                <button onclick="${send}" class="btnBlue" style="margin-top: 50px">Send</button>
                <p style="${grayText}">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
            </div>
            `
        }
        return html`
            <${upbar}/>
            <${body}/>
        `
    }
    
    return html`
    ${styles}
    ${(()=>{return counter==0 && html`<${screen0}/>`})()} 
    ${(()=>{return counter>0 && counter<=10 && html`<${upbar}/><${main} screenId="${screenId}"/>`})()}
    ${(()=>{return counter==11 && html`<${screen11}/>`})()} 
    `;
};


// Отрисовка виджета в нужный контейнер
render(h(Widget), document.querySelector('#glasses-quiz-widget'));