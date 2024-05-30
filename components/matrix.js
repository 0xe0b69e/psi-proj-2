import { useEffect, useRef } from "react";

export default function Matrix()
{
  const canvasRef = useRef( null );

  useEffect( () =>
  {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext( "2d" );

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = "アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズブプエケセテネヘメレゲゼデベペオコソトノホモヨロヲゴゾドボポヴ";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array.from( { length: columns }, () => 1 );

    const draw = () =>
    {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect( 0, 0, canvas.width, canvas.height );

      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for ( let i = 0; i < rainDrops.length; i++ )
      {
        const text = alphabet.charAt( Math.floor( Math.random() * alphabet.length ) );
        ctx.fillText( text, i * fontSize, rainDrops[ i ] * fontSize );

        if ( rainDrops[ i ] * fontSize > canvas.height && Math.random() > 0.975 )
        {
          rainDrops[ i ] = 0;
        }

        rainDrops[ i ]++;
      }
    };

    const interval = setInterval( draw, 30 );

    return () => clearInterval( interval );
  }, [] );

  return <canvas ref={canvasRef} id="matrix" className="fixed inset-0 z-0 bg-black w-screen h-screen" />;
}
