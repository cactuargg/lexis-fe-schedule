import React, { CSSProperties, useEffect, useState } from 'react';

import { IDay } from '../../../../models';

export const Day: React.FC<IDay> = ({ matrix, gridColumnStart, date }) => {
  const [style, setStyle] = useState<CSSProperties>({
    gridRow: `${gridColumnStart + 1} / span ${matrix.length}`,
  });

  useEffect(() => {
    setStyle({ gridRow: `${gridColumnStart + 1} / span ${matrix.length}` });
  }, [matrix.length, gridColumnStart]);

  return (
    <div
      className="sticky left-0 flex text-white border-b border-r dark:bg-slate-900 dark:border-slate-200/5 justify-center items-center"
      style={style}
    >
      <div className="text-2xl p-2 justify-center items-center text-slate-400">
        {date.toDateString()}
      </div>
    </div>
  );
};
