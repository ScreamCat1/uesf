import React from 'react';
import './index.scss';
import { NewsItem } from './components/news-item/news-item';
import { Search } from './components/search/search';
import { SelectGame } from './components/select-game/select-game';

export const NewsPage = () => (
    <article className="news">
        <h1 className="news__title">Новости</h1>
        <Search/>
        <SelectGame/>

        <ul className="news__list">
            <li className="news__item">
                <NewsItem/>
                <div className="news__divider"/>
            </li>
        </ul>
        <div>

        </div>
    </article>
);