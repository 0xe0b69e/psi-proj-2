export function splitArray ( array, x )
{
  let result = [];
  for ( let i = 0; i < array.length; i += x )
    result.push( array.slice( i, i + x ) );
  return result;
}