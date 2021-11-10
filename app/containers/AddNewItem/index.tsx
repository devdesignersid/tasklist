import React, { useState } from 'react';

import { AddItemButton } from '@/components';
import { NewItemForm } from '@/containers';
import { AddNewItemProps } from './types';

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        dark={dark}
        onAdd={(value: string) => {
          onAdd(value);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
