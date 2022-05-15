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
    const {counter, increment, decrement, startOver} = useCounter()
    // Upbar


    // Screen container


    // Screen switch


    return html`<p>Screen ${counter}</p><br/><button onclick="${increment}">next</button>`;
};


// Отрисовка виджета в нужный контейнер
render(h(Widget), document.querySelector('#glasses-quiz-widget'));