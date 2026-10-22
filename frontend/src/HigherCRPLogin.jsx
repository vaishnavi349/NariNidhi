import { useState } from "react";
import { Link } from "react-router-dom";
import "./HigherCRPLogin.css";

function HigherCRPLogin() {
  const [language, setLanguage] = useState("en");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [recoveryMobile, setRecoveryMobile] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const translations = {
    en: {
      eyebrow: "FIELD VERIFICATION & SUPPORT",
      welcome: "Empowering Communities Through Verification",
      subtitle: "Higher CRP Portal",
      intro: "Review SHG activities, verify field-level information, support CRPs, and help ensure that women receive the benefits and opportunities they deserve.",
      benefits: [
        "Review and verify SHG information",
        "Monitor CRP activities and progress",
        "Support scheme access and reporting",
      ],
      login: "Higher CRP Login",
      description: "Sign in to access your verification dashboard.",
      mobile: "Mobile Number",
      mobilePlaceholder: "Enter 10-digit mobile number",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      forgot: "Forgot Password?",
      button: "Sign In as Higher CRP",
      newAccount: "New Higher CRP?",
      register: "Register here",
      back: "Back to Home",
      portal: "HIGHER CRP PORTAL",
      note: "Verify information. Strengthen communities.",
      footer: "© 2026 NariNidhi | Empowering Women Through Digital Finance",
      recoveryTitle: "Reset Your Password",
      recoveryDescription: "Enter the mobile number registered with your account.",
      recoveryButton: "Continue",
      backLogin: "Back to Login",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      emptyPassword: "Please enter your password.",
      loginInfo: "Your form is validated. Connect the Java backend to authenticate your account.",
      recoveryInfo: "Mobile number validated. Backend integration is required to verify your account and reset your password.",
      show: "Show",
      hide: "Hide",
      security: "Secure access to your Higher CRP account",
    },
    mr: {
      eyebrow: "क्षेत्रीय पडताळणी आणि सहाय्य",
      welcome: "पडताळणीद्वारे समुदाय सक्षमीकरण",
      subtitle: "उच्च CRP पोर्टल",
      intro: "बचत गटांच्या कामकाजाची तपासणी करा, क्षेत्रीय माहितीची पडताळणी करा, CRP यांना सहाय्य करा आणि महिलांना योजनांचा लाभ मिळवून देण्यासाठी मदत करा.",
      benefits: [
        "बचत गटाच्या माहितीची तपासणी व पडताळणी",
        "CRP कामकाज आणि प्रगतीवर लक्ष",
        "योजना आणि अहवालासाठी सहाय्य",
      ],
      login: "उच्च CRP लॉगिन",
      description: "पडताळणी डॅशबोर्डमध्ये प्रवेश करण्यासाठी लॉगिन करा.",
      mobile: "मोबाईल क्रमांक",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक टाका",
      password: "पासवर्ड",
      passwordPlaceholder: "तुमचा पासवर्ड टाका",
      forgot: "पासवर्ड विसरलात?",
      button: "उच्च CRP म्हणून लॉगिन करा",
      newAccount: "नवीन उच्च CRP?",
      register: "येथे नोंदणी करा",
      back: "मुख्यपृष्ठावर परत जा",
      portal: "उच्च CRP पोर्टल",
      note: "माहितीची पडताळणी करा. समुदाय मजबूत करा.",
      footer: "© २०२६ नारीनिधी | महिला सक्षमीकरण व्यासपीठ",
      recoveryTitle: "पासवर्ड रीसेट करा",
      recoveryDescription: "तुमच्या खात्याशी नोंदणीकृत मोबाईल क्रमांक टाका.",
      recoveryButton: "पुढे जा",
      backLogin: "लॉगिनवर परत जा",
      invalidMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका.",
      emptyPassword: "कृपया पासवर्ड टाका.",
      loginInfo: "फॉर्मची पडताळणी झाली आहे. खाते तपासण्यासाठी Java बॅकएंड जोडणे आवश्यक आहे.",
      recoveryInfo: "मोबाईल क्रमांक योग्य आहे. खाते पडताळणी आणि पासवर्ड रीसेटसाठी बॅकएंड जोडणे आवश्यक आहे.",
      show: "दाखवा",
      hide: "लपवा",
      security: "तुमच्या उच्च CRP खात्यासाठी सुरक्षित प्रवेश",
    },
  };

  const t = translations[language];

  function handleLogin(event) {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage(t.invalidMobile);
      setMessageType("error");
      return;
    }

    if (!password.trim()) {
      setMessage(t.emptyPassword);
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

  function changeLanguage(event) {
    setLanguage(event.target.value);
    setMessage("");
    setMessageType("");
  }

  return (
    <div className="hcrp-login-page">
      <header className="hcrp-login-header">
        <Link to="/" className="hcrp-login-logo">
          <span className="hcrp-logo-mark">N</span>
          <span>NariNidhi</span>
        </Link>

        <select
          className="hcrp-language-select"
          value={language}
          onChange={changeLanguage}
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
      </header>

      <main className="hcrp-login-container">
        <section className="hcrp-login-welcome">
          <span className="hcrp-eyebrow">{t.eyebrow}</span>

          <div className="hcrp-welcome-icon" aria-hidden="true">✓</div>

          <h1>{t.welcome}</h1>
          <h2>{t.subtitle}</h2>
          <p className="hcrp-welcome-description">{t.intro}</p>

          <div className="hcrp-benefits">
            {t.benefits.map((benefit) => (
              <p key={benefit}>
                <span>✓</span>
                {benefit}
              </p>
            ))}
          </div>

          <div className="hcrp-welcome-note">
            <span>✦</span>
            {t.note}
          </div>
        </section>

        <section className="hcrp-login-card">
          {!showForgot ? (
            <>
              <div className="hcrp-card-label">{t.portal}</div>
              <h2>{t.login}</h2>
              <p className="hcrp-login-description">{t.description}</p>

              <form onSubmit={handleLogin}>
                <label htmlFor="hcrp-mobile">{t.mobile}</label>
                <input
                  id="hcrp-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  placeholder={t.mobilePlaceholder}
                  value={mobile}
                  onChange={(event) =>
                    setMobile(event.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  required
                />

                <div className="hcrp-password-label">
                  <label htmlFor="hcrp-password">{t.password}</label>
                  <button
                    type="button"
                    className="hcrp-text-button"
                    onClick={() => {
                      setShowForgot(true);
                      setRecoveryMobile("");
                      setMessage("");
                      setMessageType("");
                    }}
                  >
                    {t.forgot}
                  </button>
                </div>

                <div className="hcrp-password-wrap">
                  <input
                    id="hcrp-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="hcrp-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? t.hide : t.show}
                  </button>
                </div>

                {message && (
                  <p className={`hcrp-message ${messageType}`} role="status">
                    {message}
                  </p>
                )}

                <button type="submit" className="hcrp-submit">
                  {t.button} <span>→</span>
                </button>
              </form>

              <div className="hcrp-divider">
                <span />
                {language === "en" ? "NEW TO NARINIDHI?" : "नारीनिधीसाठी नवीन आहात?"}
                <span />
              </div>

              <p className="hcrp-register-text">
                {t.newAccount}{" "}
                <Link to="/higher-crp-register">{t.register}</Link>
              </p>

              <Link to="/" className="hcrp-back-home">← {t.back}</Link>

              <div className="hcrp-security">
                <span>◇</span> {t.security}
              </div>
            </>
          ) : (
            <>
              <div className="hcrp-card-label">{t.portal}</div>
              <h2>{t.recoveryTitle}</h2>
              <p className="hcrp-login-description">{t.recoveryDescription}</p>

              <form onSubmit={handleRecovery}>
                <label htmlFor="hcrp-recovery-mobile">{t.mobile}</label>
                <input
                  id="hcrp-recovery-mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
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
                  <p className={`hcrp-message ${messageType}`} role="status">
                    {message}
                  </p>
                )}

                <button type="submit" className="hcrp-submit">
                  {t.recoveryButton} <span>→</span>
                </button>
              </form>

              <button
                type="button"
                className="hcrp-text-button hcrp-back-login"
                onClick={() => {
                  setShowForgot(false);
                  setMessage("");
                  setMessageType("");
                }}
              >
                ← {t.backLogin}
              </button>
            </>
          )}
        </section>
      </main>

      <footer className="hcrp-login-footer">{t.footer}</footer>
    </div>
  );
}

export default HigherCRPLogin;