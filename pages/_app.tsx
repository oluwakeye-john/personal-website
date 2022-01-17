import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/globalstyles";
import CustomCursor from "../components/cursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CustomCursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
