import { DragItem } from '@/types';

const isHidden = (draggedItem: DragItem | undefined, itemType: string, id: string): boolean => {
  return Boolean(draggedItem && draggedItem.type === itemType && draggedItem.id === id);
};

export default isHidden;
