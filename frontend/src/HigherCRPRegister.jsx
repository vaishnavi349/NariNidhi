import { useState } from "react";
import { Link } from "react-router-dom";
import "./HigherCRPRegister.css";

function HigherCRPRegister() {
  const [language, setLanguage] = useState("en");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    assignedArea: "",
    password: "",
    confirmPassword: "",
  });

  const translations = {
    en: {
      eyebrow: "JOIN THE NARINIDHI NETWORK",
      welcome: "Support Women. Strengthen Communities.",
      subtitle: "Register as Higher CRP",
      intro: "Create your account to support field verification, monitor SHG progress, and coordinate community-level activities.",
      benefits: [
        "Verify SHG records and activities",
        "Support CRPs and community members",
        "Track field progress and reports",
      ],
      portal: "HIGHER CRP REGISTRATION",
      title: "Create Your Account",
      description: "Enter your details to register as a Higher CRP.",
      fullName: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      mobile: "Mobile Number *",
      mobilePlaceholder: "Enter 10-digit mobile number",
      email: "Email Address",
      emailPlaceholder: "Enter your email (optional)",
      area: "Assigned Area / Block *",
      areaPlaceholder: "Enter your assigned area",
      password: "Create Password *",
      passwordPlaceholder: "Minimum 6 characters",
      confirmPassword: "Confirm Password *",
      confirmPlaceholder: "Re-enter your password",
      button: "Register as Higher CRP",
      already: "Already registered?",
      login: "Login here",
      back: "Back to Home",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      shortPassword: "Password must contain at least 6 characters.",
      mismatch: "Passwords do not match.",
      success: "Registration form validated. Connect the Java backend to save your account.",
      security: "Your information will require backend verification.",
      footer: "© 2026 NariNidhi | Empowering Women Through Digital Finance",
    },
    mr: {
      eyebrow: "नारीनिधी नेटवर्कमध्ये सामील व्हा",
      welcome: "महिलांना सहाय्य करा. समुदाय मजबूत करा.",
      subtitle: "उच्च CRP म्हणून नोंदणी",
      intro: "क्षेत्रीय पडताळणी, बचत गटांच्या प्रगतीवर लक्ष आणि समुदाय स्तरावरील कामांसाठी खाते तयार करा.",
      benefits: [
        "बचत गटाच्या नोंदी आणि कामांची पडताळणी",
        "CRP आणि समुदाय सदस्यांना सहाय्य",
        "क्षेत्रीय प्रगती आणि अहवाल तपासा",
      ],
      portal: "उच्च CRP नोंदणी",
      title: "तुमचे खाते तयार करा",
      description: "उच्च CRP म्हणून नोंदणी करण्यासाठी माहिती भरा.",
      fullName: "पूर्ण नाव *",
      fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
      mobile: "मोबाईल क्रमांक *",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक टाका",
      email: "ईमेल पत्ता",
      emailPlaceholder: "ईमेल लिहा (ऐच्छिक)",
      area: "नियुक्त क्षेत्र / ब्लॉक *",
      areaPlaceholder: "तुमचे नियुक्त क्षेत्र लिहा",
      password: "पासवर्ड तयार करा *",
      passwordPlaceholder: "किमान ६ अक्षरे",
      confirmPassword: "पासवर्डची पुष्टी करा *",
      confirmPlaceholder: "पासवर्ड पुन्हा लिहा",
      button: "उच्च CRP म्हणून नोंदणी करा",
      already: "आधीच नोंदणी केली आहे?",
      login: "येथे लॉगिन करा",
      back: "मुख्यपृष्ठावर परत जा",
      invalidMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक टाका.",
      shortPassword: "पासवर्डमध्ये किमान ६ अक्षरे असणे आवश्यक आहे.",
      mismatch: "दोन्ही पासवर्ड जुळत नाहीत.",
      success: "नोंदणी फॉर्मची पडताळणी झाली. खाते जतन करण्यासाठी Java बॅकएंड जोडणे आवश्यक आहे.",
      security: "तुमच्या माहितीची पडताळणी बॅकएंडद्वारे करावी लागेल.",
      footer: "© २०२६ नारीनिधी | महिला सक्षमीकरण व्यासपीठ",
    },
  };

  const t = translations[language];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        name === "mobile"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));

    setMessage("");
    setMessageType("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setMessage(t.invalidMobile);
      setMessageType("error");
      return;
    }

    if (formData.password.length < 6) {
      setMessage(t.shortPassword);
      setMessageType("error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage(t.mismatch);
      setMessageType("error");
      return;
    }

    setMessage(t.success);
    setMessageType("success");
  }

  return (
    <div className="hcrp-register-page">
      <header className="hcrp-register-header">
        <Link to="/" className="hcrp-register-logo">
          <span className="hcrp-register-logo-mark">N</span>
          <span>NariNidhi</span>
        </Link>

        <div className="hcrp-register-header-actions">
          <select
            className="hcrp-register-language"
            aria-label="Select language"
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value);
              setMessage("");
              setMessageType("");
            }}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>

          <Link to="/higher-crp-login" className="hcrp-register-login-link">
            {t.already} {t.login}
          </Link>
        </div>
      </header>

      <main className="hcrp-register-container">
        <section className="hcrp-register-welcome">
          <span className="hcrp-register-eyebrow">{t.eyebrow}</span>

          <div className="hcrp-register-icon" aria-hidden="true">✓</div>

          <h1>{t.welcome}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.intro}</p>

          <div className="hcrp-register-benefits">
            {t.benefits.map((benefit) => (
              <p key={benefit}>
                <span>✓</span>
                {benefit}
              </p>
            ))}
          </div>

          <div className="hcrp-register-note">
            <span>✦</span>
            {t.security}
          </div>
        </section>

        <section className="hcrp-register-card">
          <div className="hcrp-register-card-label">{t.portal}</div>
          <h2>{t.title}</h2>
          <p className="hcrp-register-description">{t.description}</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="hcrp-fullName">{t.fullName}</label>
            <input
              id="hcrp-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder={t.fullNamePlaceholder}
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="hcrp-register-mobile">{t.mobile}</label>
            <input
              id="hcrp-register-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              placeholder={t.mobilePlaceholder}
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <label htmlFor="hcrp-email">{t.email}</label>
            <input
              id="hcrp-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="hcrp-area">{t.area}</label>
            <input
              id="hcrp-area"
              name="assignedArea"
              type="text"
              placeholder={t.areaPlaceholder}
              value={formData.assignedArea}
              onChange={handleChange}
              required
            />

            <label htmlFor="hcrp-register-password">{t.password}</label>
            <div className="hcrp-register-password-wrap">
              <input
                id="hcrp-register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder={t.passwordPlaceholder}
                value={formData.password}
                onChange={handleChange}
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hcrp-register-password-toggle"
              >
                {showPassword
                  ? (language === "en" ? "Hide" : "लपवा")
                  : (language === "en" ? "Show" : "दाखवा")}
              </button>
            </div>

            <label htmlFor="hcrp-confirm-password">{t.confirmPassword}</label>
            <div className="hcrp-register-password-wrap">
              <input
                id="hcrp-confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder={t.confirmPlaceholder}
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="hcrp-register-password-toggle"
              >
                {showConfirmPassword
                  ? (language === "en" ? "Hide" : "लपवा")
                  : (language === "en" ? "Show" : "दाखवा")}
              </button>
            </div>

            {message && (
              <p
                className={`hcrp-register-message ${messageType}`}
                role="status"
              >
                {message}
              </p>
            )}

            <button type="submit" className="hcrp-register-submit">
              {t.button} <span>→</span>
            </button>
          </form>

          <p className="hcrp-register-bottom">
            {t.already}{" "}
            <Link to="/higher-crp-login">{t.login}</Link>
          </p>

          <Link to="/" className="hcrp-register-back">
            ← {t.back}
          </Link>
        </section>
      </main>

      <footer className="hcrp-register-footer">{t.footer}</footer>
    </div>
  );
}

export default HigherCRPRegister;