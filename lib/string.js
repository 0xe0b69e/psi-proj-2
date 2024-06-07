export function hexToAscii ( hexString )
{
  let asciiString = "";
  for ( let i = 0; i < hexString.length; i += 2 )
    asciiString += String.fromCharCode( parseInt( hexString.substring( i, i + 2 ), 16 ) );
  return asciiString;
}

export const base64ToAscii = atob;