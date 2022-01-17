import { createGlobalStyle } from "styled-components";
import { Fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    ${Fonts};

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamilies.normal};
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes.m};
        line-height: 140.5%;
        overflow-x: hidden;
    }

    * {
        &:focus{
            outline-color: ${({ theme }) => theme.colors.primary};
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .disable-scroll {
        ${({ theme }) => theme.media.lg}{
            overflow: hidden;
        }
    }
    
`;
