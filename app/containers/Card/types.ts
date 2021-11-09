export interface CardProps {
  value: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean | undefined;
}

export interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}
