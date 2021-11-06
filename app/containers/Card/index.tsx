import React from 'react';

import CardContainer from './CardContainer';
import { CardProps } from './types';

const Card = ({ value }: CardProps) => {
  return <CardContainer>{value}</CardContainer>;
};

export default Card;
