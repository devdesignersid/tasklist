import styled from '@emotion/styled';

import { DragPreviewContainerProps } from './types';

const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? 'rotate(5deg)' : undefined)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 0.5rem;
  max-width: 300px;
  padding: 0.5rem 1rem;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

export default CardContainer;
