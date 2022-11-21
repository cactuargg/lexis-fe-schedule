import React, { CSSProperties, memo } from 'react';

import css from './GridCell.module.css';

const MemoGridCell: React.FC<{ col: number; row: number }> = ({ col, row }) => {
  const style: CSSProperties = {
    gridColumnStart: col,
    gridRowStart: row,
  };
  return <div style={style} className={css.Container} />;
};

export const GridCell = memo(MemoGridCell);
