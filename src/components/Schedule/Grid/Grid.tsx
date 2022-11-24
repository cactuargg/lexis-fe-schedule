import React, { Fragment, useMemo } from 'react';

import { useScheduleContext } from '../../../contexts';
import { TIMES } from '../../../hooks/constants';
import { GridCell } from './GridCell';

export const Grid = () => {
  const { rowsNumber, days, trim } = useScheduleContext();
  const rows = useMemo(() => Array<number>(rowsNumber).fill(0), [rowsNumber]);

  const columns = useMemo(
    () =>
      Array<number>(days.order.length * TIMES.length)
        .fill(0)
        .slice(trim.start, trim.end),
    [days.order.length, trim.end, trim.start],
  );

  return (
    <>
      {rows.map((rowValue, row) => {
        const key = `day-row-${row}`;
        return (
          <Fragment key={key}>
            {columns.map((colValue, col) => {
              const colKey = `${key}-${col}-grid-cell`;
              return <GridCell row={row + 2} col={col + 1} key={colKey} />;
            })}
          </Fragment>
        );
      })}
    </>
  );
};
