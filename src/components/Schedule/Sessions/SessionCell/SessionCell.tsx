import React from 'react';

import { IScheduleSessionEntry } from '../../../../models';
import css from './SessionCell.module.css';

export const SessionCell: React.FC<IScheduleSessionEntry> = ({
  title,
  start,
  end,
  isSingleDay,
  ...style
}) => {
  const className = [css.Container, isSingleDay ? '' : css.NotSingleDay].join(' ').trim();

  return (
    <div className={className} title={title} style={style}>
      <div>
        {start} &mdash; {end}
      </div>
      <div>{title}</div>
    </div>
  );
};
