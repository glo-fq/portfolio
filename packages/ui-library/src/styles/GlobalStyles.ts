import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  --radix-accordion-content-height: 36px;

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.cardForeground};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
    
  menu, ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [role=button], button {
    cursor: pointer;
}

button, input:where([type=button]), input:where([type=reset]), input:where([type=submit]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
}

button, select {
    text-transform: none;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgba(39, 39, 42, 1) transparent;
}
    *  {
    border-color: rgba(39, 39, 42, 1);
}
    *, :after, :before {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgba(39, 39, 42, 1) transparent;
}

div {
    display: block;
    unicode-bidi: isolate;
}
`;
