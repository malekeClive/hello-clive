import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { Power3, TimelineMax } from 'gsap';

export default function SplashScreen({ setIsSplashScreenDone }) {
  let rootBackground = useRef(null);
  let myName = useRef(null);

  useEffect(() => {
    const myNameAnimation = setTimeout(() => {
      var tl = new TimelineMax();
      tl.to(
        myName.current,
        {
          duration: 1,
          translateY: 30,
          ease: Power3.easeIn
        }
      ).to(
        rootBackground.current,
        {
          duration: 1,
          autoAlpha: 0,
          ease: Power3.easeInOut
        }
      ).eventCallback("onComplete", () => {
        rootBackground.current.style.display = "none";
        setIsSplashScreenDone(true);
      });

    }, 1000);
    
    return () => {
      clearTimeout(myNameAnimation)
    };
  }, [setIsSplashScreenDone]);

  return (
    <div ref={rootBackground} className={css`
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #1f1f1f;
    `}>
      <div className={css`
        position: fixed;
        top: 50%;
        width: 100%;
      `}>
        <div className={css`
          position: relative;
          height: 30px;
          overflow: hidden;
          top: -13px;
        `}>
          <p ref={myName} className={css`
            position: absolute;
            text-align: center;
            margin: 0;
            width: 100%;
            top: 0;
            color: #fff;
            font-size: 1.5rem;
          `}>
            Hi !
          </p>
        </div>
      </div>
    </div>
  )
}
