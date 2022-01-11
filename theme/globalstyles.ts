import { createGlobalStyle } from "styled-components";
import { Fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    ${Fonts};

    *
    {
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
`;
