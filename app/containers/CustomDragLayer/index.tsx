import React from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';

import { Column } from '@/containers';
import CustomDragLayerContainer from './CustomDragLayerContainer';

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

const CustomDragLayer: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column isPreview id={item.id} title={item.title} index={item.index} />
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
