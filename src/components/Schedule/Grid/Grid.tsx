import React, { Fragment } from 'react';
import { useScheduleContext } from '../../../contexts';
import { TIMES } from '../../../hooks/constants';
import { GridCell } from './GridCell';

export const Grid = () => {
  const { rowsNumber } = useScheduleContext();
  return (
    <>
      {Array(rowsNumber)
        .fill('')
        .map((_, row) => {
          const key = `day-row-${row}`;
          return (
            <Fragment key={key}>
              {TIMES.map((time, col) => (
                <GridCell row={row + 2} col={col + 2} key={`${key}-${time}-grid-cell`} />
              ))}
            </Fragment>
          );
        })}
    </>
  );
};
