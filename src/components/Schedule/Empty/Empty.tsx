import React from 'react';
import css from './Empty.module.css';

export const Empty = () => (
  <div
    className={css.Container}
    style={{ gridColumnStart: 1, gridRowStart: 1, width: 100 }}
  />
);
