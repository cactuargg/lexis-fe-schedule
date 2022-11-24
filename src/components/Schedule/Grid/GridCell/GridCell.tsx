import React, { CSSProperties, memo } from 'react';

const MemoGridCell: React.FC<{ col: number; row: number }> = ({ col, row }) => {
  const style: CSSProperties = {
    gridColumnStart: col,
    gridRowStart: row,
  };
  return <div style={style} className="dark:border-slate-200/5 border-b border-r" />;
};

export const GridCell = memo(MemoGridCell);
