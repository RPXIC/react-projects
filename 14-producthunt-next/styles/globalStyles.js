import css from 'styled-jsx/css'

const globalStyles = css.global`
    :root {
        --gray: #3d3d3d;
        --gray2: #6F6F6F;
        --gray3: #e1e1e1;
        --orange: #DA552F; 
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

    body {
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: 'Pt Sans', sans-serif;
    }

    h1, h2, h3 {
        margin: 0 0 2rem 0;
        line-height: 1.5
    }

    h1, h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
    }

    h3 {
        font-family: 'Pt Sans', sans-serif;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`

export default globalStyles