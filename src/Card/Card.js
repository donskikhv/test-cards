import React from 'react';
import Icon from '../Icon/Icon';
import { NUMBER_TYPES } from '../constants';
import './Card.css';

export default function Card(props) {
  const { isCardOpened, number, color, onClick } = props;
  const cardName = NUMBER_TYPES[number];
  const isJoker = (number === 53) || (number === 54);

  let dividerColor = {};
  if (color === 'hearts' || color === 'diamonds') {
    dividerColor = {
      background: '#DA3131'
    };
  } else {
    dividerColor = {
      background: 'rgba(0, 0, 0, 0.85)'
    };
  }

  return(
    <>
      {isCardOpened ? (
        <div
          className={`card ${color}`}
          onClick={onClick}
        >
          <div className="card__row">
            {cardName}
            {!isJoker && (
              <Icon color={color} />
            )}
          </div>
          <div
            className='divider'
            style={dividerColor}
          />
          <div className="card__row">
            {!isJoker && (
              <Icon color={color} />
            )}
            {cardName}
          </div>
        </div>
      ) : (
        <div className='card closed' onClick={onClick}/>
      )}
    </>
  );
}