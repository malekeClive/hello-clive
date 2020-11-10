import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { TweenMax, Power3 } from 'gsap';

export default function Bottom() {
  const top = useRef(null);

  useEffect(() => {
    TweenMax.to(
      top.current,
      .5,
      {
        opacity: 1,
        ease: Power3.easeIn
      }
    )
  }, []);

  return (
    <div ref={ top } className={css`
      padding-bottom: 10%;
      padding-left: 10%;
      padding-right: 10%;
    `}>
      <div className={css`
        width: 80%;
        border-top: 2px solid #1e272e;
      `}>
      </div>
    </div>
  )
}
