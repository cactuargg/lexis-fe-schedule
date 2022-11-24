import React from 'react';

import { IScheduleSessionEntry } from '../../../../models';

export const SessionCell: React.FC<IScheduleSessionEntry> = ({
  title,
  start,
  end,
  isSingleDay,
  ...style
}) => {
  const className = [
    'rounded-lg text-left p-4 m-1 shadow-inner hover:animate-pulse hover:cursor-pointer border text-white dark:bg-sky-600/50 dark:border-sky-500',
    isSingleDay ? '' : 'dark:bg-fuchsia-600/50 dark:border-fuchsia-500',
  ]
    .join(' ')
    .trim();

  return (
    <div className={className} title={title} style={style}>
      <div>
        {start} &mdash; {end}
      </div>
      <div>{title}</div>
    </div>
  );
};
