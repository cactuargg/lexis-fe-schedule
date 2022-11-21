import React, { CSSProperties, useEffect, useState } from 'react';

import { IDay } from '../../../../models';
import css from './Day.module.css';

export const Day: React.FC<IDay> = ({ matrix, gridRow, date }) => {
  const [style, setStyle] = useState<CSSProperties>({
    gridRow: `${gridRow + 1} / span ${matrix.length}`,
  });

  useEffect(() => {
    setStyle({ gridRow: `${gridRow + 1} / span ${matrix.length}` });
  }, [matrix.length, gridRow]);

  return (
    <div className={css.Container} style={style}>
      <div className={css.Name}>{date.toDateString()}</div>
    </div>
  );
};
