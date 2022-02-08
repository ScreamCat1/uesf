import React from 'react';
import './game-info.scss';
import { GameInfoType } from '../../entities/enums/game-info-type';

interface GameInfoInterface {
    game: string;
    time: string;
    type: GameInfoType
}

const classes = {
    [GameInfoType.primary]: 'primary',
    [GameInfoType.secondary]: 'secondary'
};

export const GameInfo = ({ game, time, type }: GameInfoInterface): JSX.Element => (
    <div className="game-info">
        <div className={`game-info__game game-info__game--${classes[type]}`}>
            {game}
        </div>
        <time className={`game-info__time game-info__time--${classes[type]}`}>{time}</time>
    </div>
);
