
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SecretaryRegister.css";

function SecretaryRegister() {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    shgName: "",
    village: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const translations = {
    en: {
      home: "Home",
      title: "Secretary Registration",
      subtitle: "Organise your SHG. Empower your community.",
      description:
        "Create your secretary account to maintain meeting records, member information, savings and group activities.",
      cardTitle: "Create Your Account",
      cardDescription: "Enter your details to register as a secretary.",
      fullName: "Full Name",
      mobile: "Mobile Number",
      email: "Email Address (Optional)",
      shgName: "Self-Help Group Name",
      village: "Village / Town",
      password: "Create Password",
      confirmPassword: "Confirm Password",
      namePlaceholder: "Enter your full name",
      mobilePlaceholder: "Enter 10-digit mobile number",
      emailPlaceholder: "Enter your email address",
      shgPlaceholder: "Enter your SHG name",
      villagePlaceholder: "Enter your village or town",
      passwordPlaceholder: "Minimum 6 characters",
      confirmPlaceholder: "Re-enter your password",
      button: "Register as Secretary",
      existing: "Already registered?",
      login: "Login here",
      back: "Back to Home",
      benefits: [
        "Maintain SHG meeting records",
        "Organise member and savings details",
        "Support transparent group management",
      ],
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      shortPassword: "Password must contain at least 6 characters.",
      mismatch: "Passwords do not match.",
      success:
        "Form validated! Connect the backend to save your account.",
      footer: "Women Empowerment Platform",
    },
    mr: {
      home: "मुख्यपृष्ठ",
      title: "सचिव नोंदणी",
      subtitle: "बचत गटाचे व्यवस्थापन करा. समाज सक्षम करा.",
      description:
        "बैठकीच्या नोंदी, सदस्यांची माहिती, बचत आणि गटाच्या उपक्रमांसाठी सचिव खाते तयार करा.",
      cardTitle: "तुमचे खाते तयार करा",
      cardDescription: "सचिव म्हणून नोंदणी करण्यासाठी माहिती भरा.",
      fullName: "पूर्ण नाव",
      mobile: "मोबाईल क्रमांक",
      email: "ईमेल पत्ता (ऐच्छिक)",
      shgName: "बचत गटाचे नाव",
      village: "गाव / शहर",
      password: "पासवर्ड तयार करा",
      confirmPassword: "पासवर्डची पुष्टी करा",
      namePlaceholder: "तुमचे पूर्ण नाव टाका",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक टाका",
      emailPlaceholder: "ईमेल पत्ता टाका",
      shgPlaceholder: "बचत गटाचे नाव टाका",
      villagePlaceholder: "गाव किंवा शहराचे नाव टाका",
      passwordPlaceholder: "किमान ६ अक्षरे",
      confirmPlaceholder: "पासवर्ड पुन्हा टाका",
      button: "सचिव म्हणून नोंदणी करा",
      existing: "आधीच नोंदणी केली आहे?",
      login: "येथे लॉगिन करा",
      back: "मुख्यपृष्ठावर परत जा",
      benefits: [
        "बचत गटाच्या बैठकीच्या नोंदी ठेवा",
        "सदस्य आणि बचतीची माहिती सांभाळा",
        "गटाचे पारदर्शक व्यवस्थापन करा",
      ],
      invalidMobile: "कृपया योग्य १० अंकी मोबाईल क्रमांक टाका.",
      shortPassword: "पासवर्डमध्ये किमान ६ अक्षरे असावीत.",
      mismatch: "दोन्ही पासवर्ड जुळत नाहीत.",
      success:
        "फॉर्म तपासला आहे! खाते जतन करण्यासाठी बॅकएंड जोडणे आवश्यक आहे.",
      footer: "महिला सक्षमीकरण व्यासपीठ",
    },
  };

  const t = translations[language];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setMessage(t.invalidMobile);
      return;
    }

    if (formData.password.length < 6) {
      setMessage(t.shortPassword);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage(t.mismatch);
      return;
    }

    setMessage(t.success);
  }

  return (
    <div className="secretary-register-page">
      <header className="secretary-register-header">
        <Link to="/" className="secretary-register-logo">
          <span className="secretary-register-logo-mark">N</span>
          <span>
            <strong>NariNidhi</strong>
            <small>{t.footer}</small>
          </span>
        </Link>

        <div className="secretary-register-header-actions">
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

          <Link to="/secretary-login" className="secretary-register-nav">
            {t.login}
          </Link>
        </div>
      </header>

      <main className="secretary-register-container">
        <section className="secretary-register-welcome">
          <span className="secretary-register-eyebrow">
            NARINIDHI · SHG PORTAL
          </span>

          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.description}</p>

          <div className="secretary-register-benefits">
            {t.benefits.map((benefit, index) => (
              <div className="secretary-register-benefit" key={index}>
                <span>✓</span>
                {benefit}
              </div>
            ))}
          </div>

          <div className="secretary-register-note">
            <span>✦</span>
            <div>
              <strong>Better records, stronger groups</strong>
              <p>Keep your SHG information organised in one place.</p>
            </div>
          </div>
        </section>

        <section className="secretary-register-card">
          <div className="secretary-register-card-icon">▤</div>

          <h2>{t.cardTitle}</h2>
          <p className="secretary-register-description">
            {t.cardDescription}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="secretary-register-field">
              <label htmlFor="secretary-fullname">{t.fullName}</label>
              <input
                id="secretary-fullname"
                type="text"
                name="fullName"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-register-mobile">{t.mobile}</label>
              <input
                id="secretary-register-mobile"
                type="tel"
                name="mobile"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                value={formData.mobile}
                onChange={(e) => {
                  setFormData((previous) => ({
                    ...previous,
                    mobile: e.target.value.replace(/\D/g, ""),
                  }));
                  setMessage("");
                }}
                placeholder={t.mobilePlaceholder}
                required
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-register-email">{t.email}</label>
              <input
                id="secretary-register-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-register-shg">{t.shgName}</label>
              <input
                id="secretary-register-shg"
                type="text"
                name="shgName"
                value={formData.shgName}
                onChange={handleChange}
                placeholder={t.shgPlaceholder}
                required
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-register-village">{t.village}</label>
              <input
                id="secretary-register-village"
                type="text"
                name="village"
                autoComplete="address-level2"
                value={formData.village}
                onChange={handleChange}
                placeholder={t.villagePlaceholder}
                required
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-register-password">{t.password}</label>
              <input
                id="secretary-register-password"
                type="password"
                name="password"
                autoComplete="new-password"
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder={t.passwordPlaceholder}
                required
              />
            </div>

            <div className="secretary-register-field">
              <label htmlFor="secretary-confirm-password">
                {t.confirmPassword}
              </label>
              <input
                id="secretary-confirm-password"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                minLength={6}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t.confirmPlaceholder}
                required
              />
            </div>

            {message && (
              <p
                className={
                  message === t.success
                    ? "secretary-register-message"
                    : "secretary-register-error"
                }
                role="status"
              >
                {message}
              </p>
            )}

            <button type="submit" className="secretary-register-submit">
              {t.button} <span>→</span>
            </button>
          </form>

          <p className="secretary-register-bottom">
            {t.existing}{" "}
            <Link to="/secretary-login">{t.login}</Link>
          </p>

          <Link to="/" className="secretary-register-back">
            ← {t.back}
          </Link>
        </section>
      </main>

      <footer className="secretary-register-footer">
        © 2026 NariNidhi · {t.footer}
      </footer>
    </div>
  );
}

export default SecretaryRegister;
