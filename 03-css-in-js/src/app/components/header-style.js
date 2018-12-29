import { css } from 'emotion';

import { theme } from 'site-css/_vars';
import { shadow } from 'site-css/_extensions';

console.log('theme: ', theme);
const _header = css`
  position: fixed;
  height: ${theme['header-height']};
  width: 100%;
  padding: 0;
  left: 0;
  top: 0;
  background: ${theme.primary};
  z-index: 50;

  h1 {
    float: left;
    margin: 0;
    padding: 0 ${theme['base-spacing']};
    font-size: 24px;
    line-height: ${theme['header-height']};
    font-weight: 400;
    color: ${theme.secondary};
  }

  nav {
    float: right;
    font-size: 100%;

    a {
      display: inline-block;
      height: ${theme['header-height']};
      line-height: ${theme['header-height']};
      padding: 0 ${theme['base-spacing']};
      text-align: center;
      min-width: 50px;
      background: ${theme.background}00;
      will-change: background-color;
      text-decoration: none;
      color: ${theme.secondary};
      &:hover, &:active {
        background: ${theme.background}4d;
      }
    }
  }

  @media screen and (max-width: 401px) {
    nav {
      a {
        padding: 0 calc(${theme['base-spacing']} / 2);
        min-width: calc(${theme['base-spacing']} * 2);
      }
    }
  }

  @media screen and (max-width: 321px) {
    h1 {
      font-size: 18px;
    }
  }
`;

const header = css`${_header}; ${shadow}`;

export { header };
