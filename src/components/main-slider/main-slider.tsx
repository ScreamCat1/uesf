import React from 'react';
import { arrowIcon } from '../../entities/constants/svg-icons';
import { GameInfoType } from '../../entities/enums/game-info-type';
import { GameInfo } from '../game-info/game-info';
import './main-slider.scss';

export const MainSlider = () => (
    <div className="main-slider">
        <div>
            <figure className="main-slider__figure">
                <img src="./assets/main-slider-image.png" alt="" className="main-slider__image"/>
            </figure>
            <GameInfo game={'cs:go'} time={'6 января 2022 14:00'} type={GameInfoType.primary}/>

            <a href="" className="main-slider__link link">Перейти на страницу мероприятия
                <span className="link__main-bg"></span>
                <span className="link__bg"></span></a>
        </div>
        <div className="main-slider__actions">
            <div className="actions">
                <button className="actions__button actions__button--prev">
                    {arrowIcon}
                </button>
                <button className="actions__button actions__button--next">
                    {arrowIcon}
                </button>
            </div>
            <ul className="dots">
                <li className="dots__item">
                    <button className="dots__button dots__button--active"></button>
                </li>
                <li className="dots__item">
                    <button className="dots__button"></button>
                </li>
                <li className="dots__item">
                    <button  className="dots__button"></button>
                </li>
            </ul>
        </div>
    </div>
);
