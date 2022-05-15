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
    
    // Header upper part of upbar
    const header = ()=>{
        return html`
            <div class="upbar_header">back 1/10 exit</div>`
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
        return html`
        <div class="main">main</div>`
    }


    return html`
    ${styles}
    <${upbar}/>
    <${main}/>
    `;
};


// Отрисовка виджета в нужный контейнер
render(h(Widget), document.querySelector('#glasses-quiz-widget'));