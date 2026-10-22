import { useState } from "react";
import { Link } from "react-router-dom";
import "./PresidentLogin.css";

function PresidentLogin() {
  const [language, setLanguage] = useState("en");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [recoveryMobile, setRecoveryMobile] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const translations = {
    en: {
      welcome: "Empowering Women, Leading Together",
      subtitle: "Lead Your Self-Help Group",
      intro:
        "Manage your SHG members, monitor savings, coordinate activities, and help women build sustainable businesses with NariNidhi.",
      benefit1: "Manage SHG members and group activities",
      benefit2: "Monitor savings and contributions",
      benefit3: "Access reports and important notifications",
      login: "President Login",
      description: "Sign in to access your President dashboard.",
      mobile: "Mobile Number",
      mobilePlaceholder: "Enter your 10-digit mobile number",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      forgot: "Forgot Password?",
      loginButton: "Sign In as President",
      noAccount: "New president?",
      register: "Register here",
      back: "Back to Home",
      footer: "© 2026 NariNidhi | Empowering Women Through Digital Finance",
      recoveryTitle: "Reset Your Password",
      recoveryDescription:
        "Enter the mobile number registered with your account.",
      recoveryButton: "Continue",
      backToLogin: "Back to Login",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      loginInfo:
        "Your details have been entered. Connect the Java backend to authenticate your account.",
      recoveryInfo:
        "Mobile number validated. Backend integration is required to verify your account and reset your password.",
      show: "Show",
      hide: "Hide",
      portal: "PRESIDENT PORTAL",
      newHere: "NEW TO NARINIDHI?",
      security: "Secure access to your President account",
      note: "Your leadership. Stronger groups. Brighter futures.",
    },
    mr: {
      welcome: "महिला सक्षमीकरण, एकत्रित नेतृत्व",
      subtitle: "तुमच्या बचत गटाचे नेतृत्व करा",
      intro:
        "नारीनिधीद्वारे सदस्यांचे व्यवस्थापन करा, बचतीवर लक्ष ठेवा, गटाच्या कामांचे नियोजन करा आणि महिलांना व्यवसाय उभारण्यासाठी मदत करा.",
      benefit1: "बचत गटातील सदस्य आणि कामांचे व्यवस्थापन",
      benefit2: "बचत आणि योगदानावर लक्ष ठेवा",
      benefit3: "अहवाल आणि महत्त्वाच्या सूचना मिळवा",
      login: "अध्यक्ष लॉगिन",
      description: "अध्यक्ष डॅशबोर्डमध्ये प्रवेश करण्यासाठी लॉगिन करा.",
      mobile: "मोबाईल क्रमांक",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक टाका",
      password: "पासवर्ड",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      forgot: "पासवर्ड विसरलात?",
      loginButton: "अध्यक्ष म्हणून लॉगिन करा",
      noAccount: "नवीन अध्यक्ष?",
      register: "येथे नोंदणी करा",
      back: "मुख्यपृष्ठावर परत जा",
      footer: "© २०२६ नारीनिधी | महिला सक्षमीकरण व्यासपीठ",
      recoveryTitle: "पासवर्ड रीसेट करा",
      recoveryDescription:
        "तुमच्या खात्याशी नोंदणीकृत मोबाईल क्रमांक टाका.",
      recoveryButton: "पुढे जा",
      backToLogin: "लॉगिनवर परत जा",
      invalidMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका.",
      loginInfo:
        "तुमची माहिती भरली आहे. खाते पडताळणीसाठी Java बॅकएंड जोडणे आवश्यक आहे.",
      recoveryInfo:
        "मोबाईल क्रमांक योग्य आहे. खाते पडताळणी आणि पासवर्ड रीसेटसाठी बॅकएंड जोडणे आवश्यक आहे.",
      show: "दाखवा",
      hide: "लपवा",
      portal: "अध्यक्ष पोर्टल",
      newHere: "नारीनिधीसाठी नवीन आहात?",
      security: "तुमच्या अध्यक्ष खात्यासाठी सुरक्षित प्रवेश",
      note: "तुमचे नेतृत्व. सक्षम बचत गट. उज्ज्वल भविष्य.",
    },
  };

  const t = translations[language];

  function handleLogin(event) {
    event.preventDefault();
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage(t.invalidMobile);
      setMessageType("error");
      return;
    }

    if (!password.trim()) {
      setMessage(
        language === "en"
          ? "Please enter your password."
          : "कृपया पासवर्ड टाका."
      );
      setMessageType("error");
      return;
    }

    setMessage(t.loginInfo);
    setMessageType("info");
  }

  function handleRecovery(event) {
    event.preventDefault();
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(recoveryMobile)) {
      setMessage(t.invalidMobile);
      setMessageType("error");
      return;
    }

    setMessage(t.recoveryInfo);
    setMessageType("info");
  }

  function openForgotPassword() {
    setShowForgot(true);
    setRecoveryMobile("");
    setMessage("");
    setMessageType("");
  }

  function backToLogin() {
    setShowForgot(false);
    setMessage("");
    setMessageType("");
  }

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
    setMessage("");
    setMessageType("");
  }

  return (
    <div className="president-login-page">
      <header className="president-login-header">
        <Link to="/" className="president-login-logo">
          <span className="president-logo-mark">N</span>
          <span>NariNidhi</span>
        </Link>

        <select
          className="president-language-select"
          aria-label="Select language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
      </header>

      <main className="president-login-container">
        <section className="president-login-welcome">
          <span className="president-welcome-eyebrow">
            LEADERSHIP & COMMUNITY
          </span>

          <div className="president-login-icon" aria-hidden="true">
            ♙
          </div>

          <h1>{t.welcome}</h1>
          <h2>{t.subtitle}</h2>

          <p className="president-welcome-description">{t.intro}</p>

          <div className="president-login-benefits">
            <p>
              <span>✓</span>
              {t.benefit1}
            </p>
            <p>
              <span>✓</span>
              {t.benefit2}
            </p>
            <p>
              <span>✓</span>
              {t.benefit3}
            </p>
          </div>

          <div className="president-welcome-note">
            <span>✦</span>
            {t.note}
          </div>
        </section>

        <section className="president-login-card">
          {!showForgot ? (
            <>
              <div className="president-card-label">{t.portal}</div>

              <h2>{t.login}</h2>

              <p className="president-login-description">
                {t.description}
              </p>

              <form onSubmit={handleLogin}>
                <label htmlFor="president-mobile">{t.mobile}</label>

                <input
                  id="president-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  title={t.invalidMobile}
                  placeholder={t.mobilePlaceholder}
                  value={mobile}
                  onChange={(event) =>
                    setMobile(
                      event.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  required
                />

                <div className="president-password-label-row">
                  <label htmlFor="president-password">
                    {t.password}
                  </label>

                  <button
                    type="button"
                    className="president-text-button"
                    onClick={openForgotPassword}
                  >
                    {t.forgot}
                  </button>
                </div>

                <div className="president-password-input-wrap">
                  <input
                    id="president-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="president-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? t.hide : t.show}
                  >
                    {showPassword ? t.hide : t.show}
                  </button>
                </div>

                {message && (
                  <p
                    className={`president-login-message ${messageType}`}
                    role="status"
                  >
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  className="president-login-button"
                >
                  {t.loginButton}
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <div className="president-login-divider">
                <span />
                <span>{t.newHere}</span>
                <span />
              </div>

              <p className="president-login-register">
                {t.noAccount}{" "}
                <Link to="/president-register">{t.register}</Link>
              </p>

              <Link to="/" className="president-login-home">
                ← {t.back}
              </Link>

              <div className="president-login-security">
                <span>◇</span>
                {t.security}
              </div>
            </>
          ) : (
            <>
              <div className="president-card-label">{t.portal}</div>

              <h2>{t.recoveryTitle}</h2>

              <p className="president-login-description">
                {t.recoveryDescription}
              </p>

              <form onSubmit={handleRecovery}>
                <label htmlFor="recovery-mobile">{t.mobile}</label>

                <input
                  id="recovery-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  title={t.invalidMobile}
                  placeholder={t.mobilePlaceholder}
                  value={recoveryMobile}
                  onChange={(event) =>
                    setRecoveryMobile(
                      event.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  required
                />

                {message && (
                  <p
                    className={`president-login-message ${messageType}`}
                    role="status"
                  >
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  className="president-login-button"
                >
                  {t.recoveryButton}
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <button
                type="button"
                className="president-text-button president-back-login"
                onClick={backToLogin}
              >
                ← {t.backToLogin}
              </button>
            </>
          )}
        </section>
      </main>

      <footer className="president-login-footer">
        {t.footer}
      </footer>
    </div>
  );
}

export default PresidentLogin;