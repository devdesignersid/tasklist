import React from 'react';

import StyledColumnTitle from './StyledColumnTitle';

interface ColumnTitleProps {
  value: string;
}

const ColumnTitle = ({ value }: ColumnTitleProps) => <StyledColumnTitle>{value}</StyledColumnTitle>;

export default ColumnTitle;
