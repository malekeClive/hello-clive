import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const revealRefs = useRef([]);
  const hideComponent = useRef(null);

  const addToRefs = el => {
    if (!revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useEffect(() => {
    hideComponent.current.style.visibility = 'visible';
    revealRefs.current.forEach((el, idx) => {
      gsap.fromTo(
        el, 
        {
          autoAlpha: 0,
          x: -100
        },
        {
          duration: 1, 
          autoAlpha: 1, 
          x: 0,
          ease: Power3.easeInOut,
          scrollTrigger: {
            id: `section-${idx + 1}`,
            trigger: el,
            start: 'top center+=250',
            toggleActions: 'play none none reverse',
            // markers: true
          }
        });
    });
  }, []);

  return (
    <div ref={hideComponent} className={css`
      visibility: hidden;
    `}>
      <div ref={addToRefs}>
        <div className={css`
          display: flex;
          align-items: center;

          @media only screen and (min-width: 768px) {
            h3 {
              font-size: 3rem;
            }
            p {
              font-size: 2rem;
            }
          }
        `}>
          <h3 className={css`
            display: inline-block;
            font-size: 2rem;
            margin: .5rem 0;
            `}>about
          </h3>
        </div>

        <div>
          <p className={css`
            font-size: 1.5rem;
            margin: 0;
            width: 70%;
            `}>I'm a front-end developer based in batam. Currently working as a game developer in a company in batam.</p>
        </div>
      </div>

      <div className={css`
        display: flex;
        flex-direction: column;
        margin-top: 5em;

        > div {
          margin: 1em 0;
        }

        @media only screen and (min-width: 768px) {
          margin-top: 6em;

          h5 {
            font-size: 3rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}>
        <div ref={addToRefs} >
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>what i usually do</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1rem;
              margin: 0;
            `}>front-end development</p>
          </div>
        </div>

        <div ref={addToRefs}>
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>what tech i used</h5>
          </div>

          <div className={css`
            font-size: 1rem;
          `}>
            <p className={css`
              margin: 0;
            `}>
              unity engine (at work)
            </p>

            <p className={css`
              margin: 0;
            `}>
              react js (self taught)
            </p>
          </div>
        </div>

        <div ref={addToRefs}>
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>contact & social media</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              phone 
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              +62-852-6781-9928
            </p>

            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              email
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              francoclivemaleke23@gmail.com
            </p>

            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              github
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              github.com/malekeclive
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
