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
        .screen0{
            background: blue;
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
        .main{
            background-color: darkgray;
        }
    </style>`


    const {counter, increment, decrement, startOver} = useCounter()
    

    // Screen 0 func
    const screen0  = ()=>{
        return html`
        <div class="screen0">screen0</div>`
    }


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


    // Upbar
    const upbar = ()=>{
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