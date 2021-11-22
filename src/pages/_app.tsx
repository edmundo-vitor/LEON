import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { QueryClientProvider } from "react-query";
import "../../styles/globals.scss";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { queryClient } from "../utils/queryClient";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="body">
        {router.asPath.startsWith("/login") ||
        router.asPath.startsWith("/register") ? (
          <></>
        ) : (
          <NavBar />
        )}

        <Component {...pageProps} />

        {router.asPath.startsWith("/login") ||
        router.asPath.startsWith("/register") ? (
          <></>
        ) : (
          <Footer />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
