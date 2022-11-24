import React from 'react';

import { Grid } from './Grid';
import { Header } from './Header';
import { Loader } from './Loader';
import { Sessions } from './Sessions';

export function Schedule() {
  return (
    <div className="grid auto-cols-schedule-columns h-[100vh] overflow-scroll dark:bg-slate-900 select-none">
      <Header />
      <Grid />
      <Sessions />
      <Loader />
    </div>
  );
}
