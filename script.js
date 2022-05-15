import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState, useCallback, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from "https://unpkg.com/htm@latest/dist/htm.module.js?module";

const html = htm.bind(h);


// Url object for storing parameters
// Counter

// Основная точка виджета
const Widget = () => {
    // Upbar


    // Screen container


    // Screen switch


    return html`<p>Start</p>`;
};


// Отрисовка виджета в нужный контейнер
render(h(Widget), document.querySelector('#glasses-quiz-widget'));