import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { I18n } from 'react-polyglot';
import poly from './polyglot';

const locale = window.locale || 'en';
const messages = {
    "hello_name": "Hello, %{name}.",
    "num_cars": "%{smart_count} car |||| %{smart_count} cars",
}

ReactDOM.render(
    <I18n locale={locale} messages={messages}>

        <poly/>
    </I18n>,

    document.getElementById('root')
);
registerServiceWorker();
