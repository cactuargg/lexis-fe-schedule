import React, { CSSProperties } from 'react';

import css from './HeaderCell.module.css';

export const HeaderCell: React.FC<{ time: string } & Pick<CSSProperties, 'gridColumnStart'>> = ({
  time,
  gridColumnStart,
}) => {
  const style: CSSProperties = {
    gridColumnStart,
  };
  return (
    <div className={css.Container} style={{ ...style }}>
      {time}
    </div>
  );
};
