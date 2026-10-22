import { useState } from "react";
import { Link } from "react-router-dom";
import "./SecretaryLogin.css";

function SecretaryLogin() {
  const [language, setLanguage] = useState("en");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const translations = {
    en: {
      home: "Home",
      heading: "Secretary Login",
      subtitle: "Manage records. Strengthen your SHG.",
      description:
        "Access your Self-Help Group workspace to maintain meeting records, member details, savings information and group activities.",
      welcome: "Welcome Back",
      instruction: "Sign in to your secretary account",
      mobile: "Mobile Number",
      mobilePlaceholder: "Enter your 10-digit mobile number",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      show: "Show",
      hide: "Hide",
      forgot: "Forgot password?",
      button: "Sign In",
      noAccount: "New to NariNidhi?",
      register: "Register as Secretary",
      back: "Back to Home",
      benefits: [
        "Maintain meeting and attendance records",
        "Manage member and savings information",
        "Keep SHG activities organised",
      ],
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      invalidPassword: "Please enter your password.",
      success:
        "Form validated. Connect the backend to authenticate your account.",
      footer: "Women Empowerment Platform",
    },
    mr: {
      home: "मुख्यपृष्ठ",
      heading: "सचिव लॉगिन",
      subtitle: "नोंदी सांभाळा. बचत गट सक्षम करा.",
      description:
        "बैठकीच्या नोंदी, सदस्यांची माहिती, बचत आणि गटाच्या उपक्रमांचे व्यवस्थापन करण्यासाठी प्रवेश करा.",
      welcome: "पुन्हा स्वागत आहे",
      instruction: "तुमच्या सचिव खात्यात लॉगिन करा",
      mobile: "मोबाईल क्रमांक",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक टाका",
      password: "पासवर्ड",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      show: "दाखवा",
      hide: "लपवा",
      forgot: "पासवर्ड विसरलात?",
      button: "लॉगिन करा",
      noAccount: "नारीनिधीवर नवीन आहात?",
      register: "सचिव म्हणून नोंदणी करा",
      back: "मुख्यपृष्ठावर परत जा",
      benefits: [
        "बैठक आणि उपस्थितीच्या नोंदी ठेवा",
        "सदस्य आणि बचतीची माहिती सांभाळा",
        "बचत गटाचे उपक्रम व्यवस्थित ठेवा",
      ],
      invalidMobile: "कृपया योग्य १० अंकी मोबाईल क्रमांक टाका.",
      invalidPassword: "कृपया पासवर्ड टाका.",
      success:
        "फॉर्म तपासला आहे. खाते प्रमाणित करण्यासाठी बॅकएंड जोडणे आवश्यक आहे.",
      footer: "महिला सक्षमीकरण व्यासपीठ",
    },
  };

  const t = translations[language];

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage(t.invalidMobile);
      return;
    }

    if (!password.trim()) {
      setMessage(t.invalidPassword);
      return;
    }

    setMessage(t.success);
  }

  return (
    <div className="secretary-login-page">
      <header className="secretary-login-header">
        <Link to="/" className="secretary-login-logo">
          <span className="secretary-logo-mark">N</span>
          <span>
            <strong>NariNidhi</strong>
            <small>{t.footer}</small>
          </span>
        </Link>

        <div className="secretary-header-actions">
          <select
            aria-label="Select language"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setMessage("");
            }}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>

          <Link to="/" className="secretary-home-link">
            {t.home}
          </Link>
        </div>
      </header>

      <main className="secretary-login-main">
        <section className="secretary-login-intro">
          <span className="secretary-eyebrow">NARINIDHI · SHG PORTAL</span>

          <h1>{t.heading}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.description}</p>

          <div className="secretary-benefits">
            {t.benefits.map((benefit, index) => (
              <div className="secretary-benefit" key={index}>
                <span className="secretary-check">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="secretary-trust-note">
            <span className="secretary-trust-icon">✦</span>
            <span>
              <strong>Organised groups, stronger futures</strong>
              <small>One platform for your SHG responsibilities.</small>
            </span>
          </div>
        </section>

        <section className="secretary-login-card">
          <div className="secretary-card-icon">▤</div>

          <h2>{t.welcome}</h2>
          <p className="secretary-card-description">{t.instruction}</p>

          <form onSubmit={handleSubmit}>
            <div className="secretary-form-group">
              <label htmlFor="secretary-mobile">{t.mobile}</label>
              <input
                id="secretary-mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value.replace(/\D/g, ""));
                  setMessage("");
                }}
                placeholder={t.mobilePlaceholder}
                required
              />
            </div>

            <div className="secretary-form-group">
              <label htmlFor="secretary-password">{t.password}</label>
              <div className="secretary-password-wrap">
                <input
                  id="secretary-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  placeholder={t.passwordPlaceholder}
                  required
                />
                <button
                  type="button"
                  className="secretary-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? t.hide : t.show}
                </button>
              </div>
            </div>

            <div className="secretary-forgot-row">
              <button
                type="button"
                className="secretary-forgot-button"
                onClick={() =>
                  setMessage(
                    language === "en"
                      ? "Password recovery needs to be connected to the backend."
                      : "पासवर्ड पुनर्प्राप्तीसाठी बॅकएंड जोडणे आवश्यक आहे."
                  )
                }
              >
                {t.forgot}
              </button>
            </div>

            {message && (
              <p
                className={
                  message === t.success
                    ? "secretary-login-message"
                    : "secretary-login-error"
                }
                role="status"
              >
                {message}
              </p>
            )}

            <button type="submit" className="secretary-submit-button">
              {t.button} <span>→</span>
            </button>
          </form>

          <div className="secretary-login-divider">
            <span />
            <span>{language === "en" ? "OR" : "किंवा"}</span>
            <span />
          </div>

          <p className="secretary-register-prompt">
            {t.noAccount}
            <br />
            <Link to="/secretary-register">{t.register}</Link>
          </p>

          <Link to="/" className="secretary-back-home">
            ← {t.back}
          </Link>
        </section>
      </main>

      <footer className="secretary-login-footer">
        © 2026 NariNidhi · {t.footer}
      </footer>
    </div>
  );
}

export default SecretaryLogin;