import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { Power3, TimelineMax } from 'gsap';

export default function SplashScreen({ setIsSplashScreenDone }) {
  let rootBackground = useRef(null);
  let myName = useRef(null);
  let backgroundFill = useRef(null);

  useEffect(() => {
    const myNameAnimation = setTimeout(() => {
      var tl = new TimelineMax();
      tl.to(
        myName.current,
        1.5,
        {
          opacity: 0,
          y: 30,
          ease: Power3.easeIn
        }
      ).to(
        backgroundFill.current,
        .5,
        {
          scaleY: .005,
          ease: Power3.easeInOut
        }
      ).to(
        backgroundFill.current,
        1,
        {
          scaleY: 1,
          ease: Power3.easeInOut
        } //, "+=0.2" ~> add delay if neccessary
      ).eventCallback("onComplete", () => {
        rootBackground.current.style.display = "none";
        setIsSplashScreenDone(true);
      })
    }, 1000);
    
    return () => {
      clearTimeout(myNameAnimation)
    };
  }, []);

  return (
    <div ref={rootBackground} className={css`
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #2c2c54;
    `}>
      <div ref={backgroundFill} className={css`
        position: fixed;
        height: 100%;
        transform: scaleY(0);
        width: 100%;
        background-color: #fff;
      `}>
      </div>
      <div className={css`
        position: fixed;
        top: 50%;
        width: 100%;
      `}>
        <div className={css`
          position: relative;
          margin: 0 auto;
          width: 200px;
          height: 30px;
          overflow: hidden;
          top: -13px;
        `}>
          <p ref={myName} className={css`
            position: absolute;
            margin: 0;
            width: 100%;
            top: 0;
            color: #fff;
          `}>
            Franco Clive Maleke
          </p>
        </div>
      </div>
    </div>
  )
}
