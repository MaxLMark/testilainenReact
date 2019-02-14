import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import './bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const members = [
    {
        name: "Joel",
        nickname: "Roffe",
        imageUrl: 'images/members/trollet.png'
    },
    {
        name: "Max",
        nickname: "Markan",
        imageUrl: 'images/members/trollet.png'
    },
    {
        name: "Axel",
        nickname: "Arkkman",
        imageUrl: 'images/members/trollet.png'
    },
    {
        name: "Anton",
        nickname: "Schmidtdogg",
        imageUrl: 'images/members/trollet.png'
    },
    {
        name: "Timo",
        nickname: "Kribu",
        imageUrl: 'images/members/trollet.png'
    }
];

const state = {
    membersData: {
        members: members
    }
};

ReactDOM.render(<App {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
