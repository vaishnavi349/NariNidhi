import { useState } from "react";
import { Link } from "react-router-dom";
import "./MemberLogin.css";

function MemberLogin() {
  const [language, setLanguage] = useState("en");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const text = {
    en: {
      title: "Member Login",
      subtitle: "Welcome to NariNidhi",
      description: "Your journey towards financial independence starts here.",
      mobile: "Mobile Number",
      password: "Password",
      login: "Sign In",
      back: "Back to Home",
      forgot: "Forgot Password?",
      register: "Register here",
      noAccount: "New member?",
      benefitsTitle: "Empowering Women, Building Futures",
      benefit1: "Track your SHG savings and contributions",
      benefit2: "Discover business opportunities",
      benefit3: "Explore government schemes",
      secure: "Your journey. Your growth. Your future.",
      show: "Show",
      hide: "Hide",
    },
    mr: {
      title: "सदस्य लॉगिन",
      subtitle: "नारीनिधीमध्ये आपले स्वागत आहे",
      description: "आर्थिक स्वावलंबनाकडे वाटचाल येथे सुरू होते.",
      mobile: "मोबाईल नंबर",
      password: "पासवर्ड",
      login: "लॉगिन करा",
      back: "मुख्य पृष्ठावर परत जा",
      forgot: "पासवर्ड विसरलात?",
      register: "येथे नोंदणी करा",
      noAccount: "नवीन सदस्य?",
      benefitsTitle: "महिला सक्षमीकरण, उज्ज्वल भविष्य",
      benefit1: "बचत गटाची बचत आणि योगदान तपासा",
      benefit2: "व्यवसायाच्या संधी शोधा",
      benefit3: "शासकीय योजनांची माहिती मिळवा",
      secure: "तुमची प्रगती. तुमचे भविष्य.",
      show: "दाखवा",
      hide: "लपवा",
    },
  };

  const t = text[language];

  function handleLogin(e) {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert(
        language === "en"
          ? "Please enter a valid 10-digit mobile number."
          : "कृपया योग्य १० अंकी मोबाईल नंबर टाका."
      );
      return;
    }

    if (!password.trim()) {
      alert(
        language === "en"
          ? "Please enter your password."
          : "कृपया पासवर्ड टाका."
      );
      return;
    }

    alert(
      language === "en"
        ? "Login form validated. Backend authentication will be connected next."
        : "लॉगिन फॉर्म तपासला आहे. बॅकएंड जोडणे बाकी आहे."
    );
  }

  return (
    <div className="member-login-page">
      <header className="login-header">
        <Link to="/" className="login-logo">
          <span className="logo-mark">N</span>
          <span>NariNidhi</span>
        </Link>

        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
      </header>

      <main className="login-container">
        <section className="login-welcome">
          <span className="welcome-eyebrow">YOUR FINANCIAL JOURNEY</span>

          <div className="welcome-icon" aria-hidden="true">
            ♀
          </div>

          <h1>{t.benefitsTitle}</h1>
          <p className="welcome-description">{t.description}</p>

          <div className="login-benefits">
            <p><span>✓</span>{t.benefit1}</p>
            <p><span>✓</span>{t.benefit2}</p>
            <p><span>✓</span>{t.benefit3}</p>
          </div>

          <div className="welcome-note">
            <span className="note-symbol">✦</span>
            <span>{t.secure}</span>
          </div>
        </section>

        <section className="login-card">
          <div className="card-top-label">MEMBER PORTAL</div>

          <h2>{t.title}</h2>
          <p className="login-description">
            {language === "en"
              ? "Sign in with your registered account details."
              : "तुमच्या नोंदणीकृत खात्याद्वारे लॉगिन करा."}
          </p>

          <form onSubmit={handleLogin}>
            <label htmlFor="mobile">{t.mobile}</label>
            <input
              id="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder={
                language === "en"
                  ? "Enter 10-digit mobile number"
                  : "१० अंकी मोबाईल नंबर टाका"
              }
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              maxLength={10}
              required
            />

            <div className="password-label-row">
              <label htmlFor="password">{t.password}</label>
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  alert(
                    language === "en"
                      ? "Password recovery will be implemented with the backend."
                      : "पासवर्ड पुनर्प्राप्तीची सुविधा बॅकएंड जोडल्यावर उपलब्ध होईल."
                  )
                }
              >
                {t.forgot}
              </button>
            </div>

            <div className="password-input-wrap">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder={
                  language === "en"
                    ? "Enter your password"
                    : "तुमचा पासवर्ड टाका"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? t.hide : t.show}
              >
                {showPassword ? t.hide : t.show}
              </button>
            </div>

            <button type="submit" className="login-button">
              {t.login} <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="login-divider">
            <span />
            <span>{language === "en" ? "NEW TO NARINIDHI?" : "नवीन सदस्य?"}</span>
            <span />
          </div>

          <p className="register-text">
            {t.noAccount}{" "}
            <Link to="/member-register" className="register-link">
              {t.register}
            </Link>
          </p>

          <Link to="/" className="back-home">
            ← {t.back}
          </Link>

          <div className="login-security">
            <span>◇</span>
            {language === "en"
              ? "Secure access to your member account"
              : "तुमच्या सदस्य खात्यासाठी सुरक्षित प्रवेश"}
          </div>
        </section>
      </main>

      <footer className="login-footer">
        © 2026 NariNidhi <span>•</span> Empowering Women Through Digital Finance
      </footer>
    </div>
  );
}

export default MemberLogin;