import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { Power3, TimelineMax } from 'gsap';

export default function SplashScreen({ setIsSplashScreenDone }) {
  let rootBackground = useRef(null);
  let myName = useRef(null);
  let backgroundFillTop     = useRef(null);
  let backgroundFillBottom  = useRef(null);

  useEffect(() => {
    const myNameAnimation = setTimeout(() => {
      var tl = new TimelineMax();
      tl.to(
        myName.current,
        1,
        {
          opacity: 0,
          y: 30,
          ease: Power3.easeIn
        }
      ).to(
        backgroundFillTop.current,
        1,
        {
          height: 0,
          ease: Power3.easeIn
        },
      ).to(
        backgroundFillBottom.current,
        1,
        {
          height: 0,
          ease: Power3.easeIn
        } //, "+=0.2" ~> add delay if neccessary
      ).eventCallback("onComplete", () => {
        rootBackground.current.style.display = "none";
        setIsSplashScreenDone(true);
      });

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
      // background-color: #1e272e;
    `}>
      <div ref={backgroundFillTop} className={css`
        position: fixed;
        height: 50%;
        width: 100%;
        background-color: #1e272e;
      `}>
      </div>

      <div ref={backgroundFillBottom} className={css`
        position: fixed;
        bottom: 0;
        height: 50%;
        width: 100%;
        background-color: #1e272e;
      `}>
      </div>
      
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
            Franco Clive Maleke
          </p>
        </div>
      </div>
    </div>
  )
}
