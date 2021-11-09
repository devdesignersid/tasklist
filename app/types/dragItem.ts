export type ColumnDragItem = {
  index: number;
  id: string;
  title: string;
  type: 'COLUMN';
};

export type CardDragItem = {
  index: number;
  id: string;
  columnId: string;
  value: string;
  type: 'CARD';
};

export type DragItem = ColumnDragItem | CardDragItem;
