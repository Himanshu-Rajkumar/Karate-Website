import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
  /* Added max-width constraint */
  max-width: 100%;
}

html, body {
  max-width: 100% !important;
  overflow-x: hidden !important;
  /* Added position relative to contain absolute elements */
  position: relative;
}

/* Added universal constraint for all elements */
*, *::before, *::after {
  max-width: 100%;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  /* Added width constraint */
  width: 100%;
  min-height: 100vh;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 3rem;
  font-weight: 700;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 2.5rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.5rem; /* left/right padding */
  /* Added width constraint and overflow prevention */
  width: 100%;
  overflow-x: hidden;
}

.grid {
  display: grid;
  gap: 2rem; /* Mobile ke liye chhota gap */
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr; /* default for mobile */
}

@media (min-width: 768px) {
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
  }
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: none;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: none;
    font-size: 1.8rem;
    cursor: pointer;
    }

  @media (min-width: 768px) {
  .grid {
    gap: 9rem;
  }
}

/* Added additional overflow prevention for all sections */
section, div, main, article, aside, header, footer, nav {
  max-width: 100%;
  overflow-x: hidden;
}

/* Prevent iframe overflow */
iframe {
  max-width: 100%;
  height: auto;
}
`
