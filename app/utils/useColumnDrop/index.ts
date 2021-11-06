import { useDrop } from 'react-dnd';
import { DragItem } from '@/types';
import useAppState from '../useAppState';

const useColumnDrop = ({ index }: { index: number }) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    }
  });
  return { drop };
};

export default useColumnDrop;
