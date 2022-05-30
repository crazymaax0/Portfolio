import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

:root {
	--bg-color: #1f1f38;
	--bg-color-2: #2c2c6c;
	--color-primary: #4db5ff;
	--color-primary-2: rgba(77, 181, 255, 0.4);
	--color-secondary: #fff;
	--color-terciary: rgba(255, 255, 255, 0.6);

	/* LG 75% MD 86% SM 90% */
	/* .CONTAINER{
		WIDTH VAR(LG,MD,SM);
		MARGIN 0 AUTO;
	} */
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {
	scroll-behavior: smooth;
}

::-webkit-scrollbar {
	display: none;
}

body {
	line-height: 1.7;
	font-family: 'Poppins', sans-serif;
	background-color: var(--bg-color);
	color: var(--color-terciary);
}

section {
	margin-top: 8rem;
	padding-top: 20px;
	/* height: 100vh; */
}

a {
	color: var(--color-primary);
	transition: all 400ms ease;
	text-decoration: none;
	&:hover {
		color: var(--color-secondary);
	}
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`