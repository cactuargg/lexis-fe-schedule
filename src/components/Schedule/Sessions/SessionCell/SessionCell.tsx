import React from 'react';
import { IScheduleSessionEntry } from '../../../../models';
import css from './SessionCell.module.css';

export const SessionCell: React.FC<IScheduleSessionEntry> = ({
  title, start, end, singleDay, ...style
}) => {
  const className = [
    css.Container,
    singleDay ? '' : css.NotSingleDay,
  ].join(' ').trim();

  return (
    <div className={className} title={title} style={style}>
      <div>
        {start}
        {' '}
        &mdash;
        {' '}
        {end}
      </div>
      <div>{title}</div>
    </div>
  );
};
