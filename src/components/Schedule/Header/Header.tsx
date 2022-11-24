import React, { useMemo } from 'react';

import { useScheduleContext } from '../../../contexts';
import { TIMES } from '../../../hooks/constants';
import { HeaderCell } from './HeaderCell';

export const Header = () => {
  const { days, trim } = useScheduleContext();

  const columns = useMemo(
    () => days.order.reduce<string[]>((acc) => acc.concat(TIMES), []).slice(trim.start, trim.end),
    [days.order, trim.end, trim.start],
  );

  return (
    <>
      {columns.map((time, index) => {
        const key = `${time}-${index}`;
        return <HeaderCell key={key} time={time} gridColumnStart={index + 1} />;
      })}
    </>
  );
};
