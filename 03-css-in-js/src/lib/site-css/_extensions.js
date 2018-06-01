import {css} from 'emotion';

/**
 * Shared Extensions (careful)
 */

const fullscreen = css`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

const shadow = css`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
              0 1px 1px 0 rgba(0, 0, 0, 0.14),
              0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export {fullscreen, shadow};
