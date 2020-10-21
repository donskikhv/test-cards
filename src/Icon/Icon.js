import React from 'react';
import { ReactComponent as Hearts } from '../icons/hearts.svg';
import { ReactComponent as Diamonds } from '../icons/diamonds.svg';
import { ReactComponent as Clubs } from '../icons/clubs.svg';
import { ReactComponent as Spades } from '../icons/spades.svg';

const ICON_TYPES = {
  hearts: Hearts,
  diamonds: Diamonds,
  clubs: Clubs,
  spades: Spades
};

const IconComponent = ({ color }) => {
  let Icon = ICON_TYPES[color];
  return <Icon />;
};

export default IconComponent;