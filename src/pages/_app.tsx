import type { AppProps } from "next/app";

import '../app/globals.css';  // Global styles

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div>Direct Test Div</div>
            <Component {...pageProps} />
        </>
    );
}
