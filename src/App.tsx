import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RestoreFrom404Redirect() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const p = url.searchParams.get("p");
    if (!p) return;
    url.searchParams.delete("p");
    const next = decodeURIComponent(p);
    window.history.replaceState({}, "", next);
  }, []);
  return null;
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RestoreFrom404Redirect />
      <ScrollToTop />

      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <div className="appShell">
        <Header />
        <main id="main" className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


