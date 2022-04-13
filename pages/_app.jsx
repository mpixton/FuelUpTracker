import "../styles/globals.css";
import { AppWrapper } from "../utils/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <main>
        <Component {...pageProps} />
      </main>
    </AppWrapper>
  );
}

export default MyApp;
