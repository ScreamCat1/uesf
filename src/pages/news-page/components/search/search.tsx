import React from 'react';
import './search.scss';

export const Search = () => (
    <div className="search">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.53906 0C14.5071 0 18.5391 4.032 18.5391 9C18.5391 13.968 14.5071 18 9.53906 18C4.57106 18 0.539062 13.968 0.539062 9C0.539062 4.032 4.57106 0 9.53906 0ZM9.53906 16C13.4061 16 16.5391 12.867 16.5391 9C16.5391 5.132 13.4061 2 9.53906 2C5.67106 2 2.53906 5.132 2.53906 9C2.53906 12.867 5.67106 16 9.53906 16ZM18.0241 16.071L20.8531 18.899L19.4381 20.314L16.6101 17.485L18.0241 16.071Z"
                fill="#949DB5"/>
        </svg>
        <input type="text" placeholder="Поиск новости" className="search__input"/>
    </div>
);