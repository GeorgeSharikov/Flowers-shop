import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  color: #666;
}
body[style*="overflow: hidden"] {
  margin-right: 17px;
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
`