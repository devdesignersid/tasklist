import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalCss = css`
  ${emotionNormalize}
  html , body {
    padding: 0;
    margin: 0;
    background: white;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
`;

export default GlobalCss;
