import React from 'react';
import { GameInfo } from '../../../../components/game-info/game-info';
import { GameInfoType } from '../../../../entities/enums/game-info-type';
import './news-item.scss';

export const NewsItem = () => (
    <div className="news-item">
        <picture>
            <img src="/2.png" alt="" className="news-item__image"/>
        </picture>

        <GameInfo game={'cs:go'} time={'6 января 2022 14:00'} type={GameInfoType.secondary}/>
        <h3 className="news-item__title">
            Первый официальный Суперкубок по киберспорту!
        </h3>
    </div>
);
