import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend( relativeTime );

export function shortRelativeTime ( date )
{
  const now = dayjs();
  const diff = now.diff( date );

  const sec = Math.floor( diff / 1000 );
  if ( sec < 60 ) return `${sec} sec`;

  const min = Math.floor( sec / 60 );
  if ( min < 60 ) return `${min} min`;

  const hrs = Math.floor( min / 60 );
  if ( hrs < 24 ) return `${hrs} hrs`;

  const days = Math.floor( hrs / 24 );
  if ( days < 30 ) return `${days} day${days > 1 ? "s" : ""}`;

  const mon = Math.floor( days / 30 );
  return `${mon} mon`;
}