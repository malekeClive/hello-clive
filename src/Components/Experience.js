import React from 'react';

import { css } from 'emotion';

export default function Experience() {
  return (
    <div className={css`
      margin-bottom: 1em;
    `}>
      <div>
        <h3 className={css`
          font-size: 3rem;
          margin: .5rem 0;
        `}>career</h3>
      </div>

      <div>
        <p><b>2019 - present. Unity developer at astagame.</b></p>
        <p>developing and collaborating with other team to make interactive card game.</p>
      </div>
    </div>
  )
}
