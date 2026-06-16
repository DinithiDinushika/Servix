import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Benefit from "./components/Benefit";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ProfilePage from "./components/ProfilePage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUser(userData);
  };

  if (showPrivacy) {
    return (
      <>
        <Navbar
          onLoginClick={() => setShowLogin(true)}
          loggedIn={loggedIn}
          onProfileClick={() => setShowProfile(true)}
          showProfile={showPrivacy}
          onNavClick={() => setShowPrivacy(false)}
          onPrivacyClick={() => setShowPrivacy(true)}
        />
        <PrivacyPolicyPage onBack={() => setShowPrivacy(false)} />
      </>
    );
  }

  if (showProfile) {
    return (
      <>
        <Navbar
          onLoginClick={() => setShowLogin(true)}
          loggedIn={loggedIn}
          onProfileClick={() => setShowProfile(true)}
          showProfile={showProfile}
          onNavClick={() => setShowProfile(false)}
          onPrivacyClick={() => setShowPrivacy(true)}
        />
        <ProfilePage user={user} onBack={() => setShowProfile(false)} />
      </>
    );
  }

  return (
    <>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        loggedIn={loggedIn}
        onProfileClick={() => setShowProfile(true)}
        onPrivacyClick={() => setShowPrivacy(true)}
      />

      <main>
        <Hero />
        <About />
        <Process />
        <Benefit />
        <Partners />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}
