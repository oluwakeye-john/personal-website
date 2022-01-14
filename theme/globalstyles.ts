import { createGlobalStyle } from "styled-components";
import { Fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    ${Fonts};

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamilies.normal};
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes.m};
        line-height: 140.5%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
