import React from 'react';
import { Header } from './Header';
import { Sessions } from './Sessions';
import { Days } from './Days';
import { Empty } from './Empty';
import { Grid } from './Grid';
import css from './Schedule.module.css';
import { SCHEDULE_STYLE } from './constants';

export function Schedule() {
  return (
    <div className={css.Container} style={SCHEDULE_STYLE}>
      <Empty />
      <Header />
      <Grid />
      <Sessions />
      <Days />
    </div>
  );
}
