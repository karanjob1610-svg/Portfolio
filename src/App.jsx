import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const activeSection = useActiveSection();
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 text-slate-200"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} />
          <main>
            <Home />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
