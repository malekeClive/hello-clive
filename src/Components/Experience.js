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
        <p><b>2019 - present. Unity developer at PT. Asta Satria Investama.</b></p>
        <p>PT. Asta Satria Investama is a startup company that developing casino games like big two, domino susun, poker and domino qq.</p>
        <p>As a front-end my job is to develop features like find room menu, profile menu, settings menu, etc.</p>
      </div>
    </div>
  )
}
