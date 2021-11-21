import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import "../../styles/globals.scss";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { TeacherProvider } from "../hooks/useTeachers";
import { isUser } from "../models/User";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <TeacherProvider>
      <div className="body">
        {router.asPath.startsWith("/login") ||
        router.asPath.startsWith("/register") ? (
          <></>
        ) : (
          <NavBar isUser={isUser} />
        )}

        <Component {...pageProps} />

        {router.asPath.startsWith("/login") ||
        router.asPath.startsWith("/register") ? (
          <></>
        ) : (
          <Footer />
        )}
      </div>
    </TeacherProvider>
  );
}

export default MyApp;
