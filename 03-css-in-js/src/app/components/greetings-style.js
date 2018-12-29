
import { css } from 'emotion';

import { theme } from 'site-css/_vars';
import { shadow } from 'site-css/_extensions';

const link = css`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.secondary};
  background: ${theme.background}00;
  will-change: background-color;

  &:hover, &:active {
    background: ${theme.primary}4d;
  }

  strong, em {
    display: block;
  }

  em {
    font-size: 85%;
    padding-left: 8px;
  }
`;

const underline = css`
  display: block;
  margin-bottom: ${theme['base-spacing']};
  text-decoration: underline !important;
`;

const _greeting = css`
  display: block;
  position: relative;
  background: ${theme.background};
  border-radius: 2px;
  margin: 0 0 calc(${theme['base-spacing']} / 2);
  padding: ${theme['base-spacing']};

  h2 {
    margin-bottom: ${theme['base-spacing']};
  }
`;

const greeting = css`${_greeting}; ${shadow};`;
export { link, underline, greeting };
