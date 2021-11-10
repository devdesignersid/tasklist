import React, { useState } from 'react';

import { useFocus } from '@/utils';
import NewItemFormContainer from './NewItemFormContainer';
import { NewItemButton, NewItemInput } from '@/components';
import { NewItemFormProps } from './types';

const NewItemForm = ({ onAdd, dark }: NewItemFormProps) => {
  const [value, setValue] = useState('');
  const inputRef = useFocus();

  return (
    <NewItemFormContainer dark={dark}>
      <NewItemInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <NewItemButton onClick={() => onAdd?.(value)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
