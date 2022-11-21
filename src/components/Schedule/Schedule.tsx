import React from 'react';

import { Days } from './Days';
import { Grid } from './Grid';
import { Header } from './Header';
import { Loader } from './Loader';
import css from './Schedule.module.css';
import { Sessions } from './Sessions';
import { SCHEDULE_STYLE } from './constants';

export function Schedule() {
  return (
    <div className={css.Container} style={SCHEDULE_STYLE}>
      <Loader />
      <Header />
      <Grid />
      <Sessions />
      <Days />
    </div>
  );
}
