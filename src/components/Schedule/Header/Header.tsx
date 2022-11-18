import React from 'react';
import { TIMES } from '../../../hooks/constants';
import { HeaderCell } from './HeaderCell';

export const Header = () => (
  <>
    {TIMES.map((time, index) => (
      <HeaderCell key={time} time={time} gridColumnStart={index + 2} />
    ))}
  </>
);
