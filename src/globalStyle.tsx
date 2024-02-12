'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        width: calc(100vw - (100vw - 100%));
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-family: var(--font-gilroy);
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #FFF;
        letter-spacing: 0.1px;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    ol,
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd,
    hr {
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        display: block;
    }

    article>*+* {
        margin-top: 1em;
    }

    input,
    button,
    textarea,
    select {
        border: none;
        outline: none;
        padding: 0;
        font: inherit;
    }

    button {
        cursor: pointer;
        background: none;
        >*{
            pointer-events: none;
        }
    }

    address {
        font-style: normal;
    }

    #map > ymaps {
        border-radius: 20px !important;
        overflow: hidden !important;
    }

    @media (max-width: 425px) {
        body section:first-of-type {
            margin-top: 162px;
        }
    }

    video::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
    
    video::-webkit-media-controls-enclosure {
        overflow: hidden;
        width: 0;
        height: 0;
        opacity: 0;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .image-container {
        height: 380px;
    }

    .slider-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left bottom;
        height: 380px;
    }

    .slider {
        position: absolute;
        inset: 0;
        cursor: pointer;
        opacity: 0;
        /* for Firefox */
        width: 100%;
        height: 380px;
    }

    .slider:focus-visible ~ .slider-button {
        outline: 2px solid black;
        outline-offset: 3px;
    }
`