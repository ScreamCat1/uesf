import React from 'react';
import './header.scss';
import { SUPPORTED_LANGUAGES } from '../../entities/constants/supported-languages';
import { federationIcon } from '../../entities/constants/svg-icons';
import { SupportLanguageInterface } from '../../entities/interfaces/support-language.interface';

export const Header = () => {
    const languageItem = (el: SupportLanguageInterface, index: number) => (
        <li className="languages__item" key={el.title}>
            <button className={`languages__button ${!index && 'languages__button--active'}`}>
                {el.icon}
            </button>
        </li>
    );
    return (
        <header className="header">
            {federationIcon}
            <ul className="languages">
                {SUPPORTED_LANGUAGES.map(languageItem)}
            </ul>
        </header>
    );
};
