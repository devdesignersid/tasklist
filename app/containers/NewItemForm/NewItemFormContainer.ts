import styled from '@emotion/styled';
import { NewItemFormProps } from './types';

const NewItemFormContainer = styled.div<NewItemFormProps>`
  max-width: 300px;
  min-width: ${(props) => (props.dark ? undefined : '300px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default NewItemFormContainer;
