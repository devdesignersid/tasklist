import { useDrag } from 'react-dnd';
import { useAppState } from '@/utils';
import { DragItem } from '@/types';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, dragPreview] = useDrag({
    type: item.type,
    item: () => {
      dispatch({ type: 'SET_DRAGGED_ITEM', payload: item });
      return item;
    },
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined })
  });
  return { drag, dragPreview };
};

export default useItemDrag;
