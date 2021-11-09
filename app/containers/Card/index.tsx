import React, { useRef } from 'react';

import CardContainer from './CardContainer';
import { CardProps } from './types';
import { useCardDrop, useItemDrag, isHidden, useAppState } from '@/utils';

const Card = ({ index, id, columnId, value, isPreview }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { state } = useAppState();
  const { drag } = useItemDrag({ index, id, columnId, value, type: 'CARD' });
  const { drop } = useCardDrop({ id, index, columnId });

  drag(drop(ref));
  return (
    <CardContainer isPreview={isPreview} ref={ref} isHidden={isHidden(isPreview, state.draggedItem, 'CARD', id)}>
      {value}
    </CardContainer>
  );
};

export default Card;
