import React from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';
import { eventsIcon, menuIcon, newsIcon, officesIcon } from '../../entities/constants/svg-icons';

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink to="events" className={({ isActive }) => `navigation__link ${isActive && 'navigation__link--active'}`}>
                    {eventsIcon}
                    Мероприятия
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to="news" className={({ isActive }) => `navigation__link ${isActive && 'navigation__link--active'}`}>
                    {newsIcon}
                    Новости
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to="offices" className={({ isActive }) => `navigation__link ${isActive && 'navigation__link--active'}`}>
                    {officesIcon}
                    Представительства
                </NavLink>
            </li>
            <li className="navigation__item">
                <button className="navigation__link">
                    {menuIcon}
                    Меню
                </button>
            </li>
        </ul>
    </nav>
);