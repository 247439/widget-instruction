'use strict';
import './widget.less';

const CLASSNAME_NAMESPACE = 'temporary-widget-class';
const container = document.createElement('div');
const button = document.createElement('button');
const iframe = document.createElement('iframe');
const body = document.getElementsByTagName('body')[0];


container.setAttribute('class', `${CLASSNAME_NAMESPACE}__container`);
button.setAttribute('class', `${CLASSNAME_NAMESPACE}__button`);
iframe.setAttribute('class', `${CLASSNAME_NAMESPACE}__iframe`);
iframe.setAttribute('src', 'list.html');

button.addEventListener('click', (event) => {
    container.classList.toggle('is-iframe-shown');
}, false);


container.appendChild(button);
container.appendChild(iframe);
body.appendChild(container);