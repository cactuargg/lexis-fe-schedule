import React, { CSSProperties } from 'react';

export const HeaderCell: React.FC<{ time: string } & Pick<CSSProperties, 'gridColumnStart'>> = ({
  time,
  gridColumnStart,
}) => {
  const style: CSSProperties = {
    gridColumnStart,
  };
  return (
    <div
      className="sticky top-0 z-10 py-4 text-center font-bold dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 text-white"
      style={{ ...style }}
    >
      {time}
    </div>
  );
};
