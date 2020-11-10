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
            `}>About
          </h3>
        </div>

        <div>
          <p className={css`
            font-size: 1.5rem;
            margin: 0;
            width: 70%;
            `}>Hi there, you can call me Clive. i loved to learn and makes a
            new things especially in tech.
            I was learning on front-end side for a year and also i can do
            little bit things on back-end side.
            Currently develop a casino games using Unity on front-end
            side.
            </p>
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
            `}>What i usually do</h5>
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
            `}>What tech i used</h5>
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
            `}>Contact & social media</h5>
          </div>

          <Contacts label="phone" name="+62-852-6781-9928" />
          <Contacts label="email" name="francoclivemaleke23@gmail.com" link="mailto:francoclivemaleke23@gmail.com" />
          <Contacts label="github" name="github.com/malekeClive" link="https://github.com/malekeClive" />
          
        </div>
      </div>

    </div>
  )
}

const Contacts = ({ label, name, link="empty" }) => {
  return (
    <div className={css`
      margin-bottom: 7px;
    `}>
      <p className={css`
        font-size: 1rem;
        color: #474787;
      `}>
        { label }
      </p>

      { link === "empty" ? 
        <p className={css`
          font-size: 1.3rem;
          margin: 0;
        `}>
          { name }
        </p>
      : 
        <p className={css`
          font-size: 1.3rem;
          margin: 0;
        `}>
          <a 
            className={css`
              text-decoration: none;
              position: relative;
              color: inherit;
              
              &:after {
                content: "";
                display: block;
                position: absolute;
                right: 0;
                bottom: -5px;
                width: 0;
                height: 1px;
                background-color: #1e272e;
                transition-property: width;
                transition-duration: 0.3s;
                transition-timing-function: ease-out;
              }

              &:hover:after {
                left: 0;
                width: 100%;
              }
            `} 
            href={ link } 
            rel="noopener noreferrer"
            target="_blank">
              { name }
          </a>
        </p>
      }
    </div>
  )
}
