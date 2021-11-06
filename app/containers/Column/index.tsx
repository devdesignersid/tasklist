import React, { useRef } from 'react';

import ColumnContainer from './ColumnContainer';
import { AddNewItem, Card } from '@/containers';
import { ColumnTitle } from '@/components';
import { ColumnProps } from './types';
import { useAppState, useItemDrag, useColumnDrop, isHidden } from '@/utils';

const Column = ({ title, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, title });
  const { drop } = useColumnDrop({ index });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref} isHidden={isHidden(state.draggedItem, 'COLUMN', id)}>
      <ColumnTitle value={title} />
      {state.lists[index].tasks.map((task) => (
        <Card value={task.value} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(value) => dispatch({ type: 'ADD_TASK', payload: { value, id } })}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
