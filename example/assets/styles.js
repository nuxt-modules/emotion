import { css, injectGlobal } from '@emotion/css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #0a1f44;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
  }

  a {
    padding: .5em;
    border: 1px solid grey;
    border-radius: .3em;
    color: #0a1f44;
    text-decoration: none;
  }
`

export const primaryStyle = css`
  color: #42b883;
`

export const logoStyle = css`
  font-size: 60px;
`

export const pinkStyle = css`
  color: hotpink;
`
