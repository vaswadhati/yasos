import {css} from 'emotion';

import {theme} from 'site-css/_vars';

const container = css`
  padding-top: calc(${theme['header-height']} + 5px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-rows: minmax(100px, auto);
`;

export {container};
