
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PresidentRegister.css";

function PresidentRegister() {
  const [language, setLanguage] = useState("en");

  const [form, setForm] = useState({
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
      navLogin: "Already registered? Login",
      title: "President Registration",
      subtitle: "Lead Your Self-Help Group",
      intro:
        "Register as an SHG President to coordinate members, monitor savings, manage group activities, and support women's financial empowerment through NariNidhi.",
      benefit1: "✓ SHG member coordination",
      benefit2: "✓ Savings and group activity monitoring",
      benefit3: "✓ Reports and notifications",
      accountTitle: "Create President Account",
      description: "Please enter your details below.",
      fullName: "Full Name *",
      fullNamePlaceholder: "Enter full name",
      mobile: "Mobile Number *",
      mobilePlaceholder: "10-digit mobile number",
      email: "Email Address",
      emailPlaceholder: "Enter email (optional)",
      shgName: "SHG Name *",
      shgPlaceholder: "Enter your SHG name",
      village: "Village / City *",
      villagePlaceholder: "Enter village or city",
      password: "Create Password *",
      passwordPlaceholder: "Minimum 6 characters",
      confirmPassword: "Confirm Password *",
      confirmPlaceholder: "Re-enter password",
      register: "Register as President",
      already: "Already have an account?",
      login: "Login here",
      back: "← Back to Home",
      invalidMobile: "Enter a valid 10-digit mobile number.",
      shortPassword: "Password must contain at least 6 characters.",
      mismatch: "Passwords do not match.",
      success:
        "Form validated. Admin approval and backend connection are required to activate your President account.",
      footer: "© 2026 NariNidhi | Women Empowerment Platform",
    },

    mr: {
      navLogin: "आधीच नोंदणी केली आहे? लॉगिन करा",
      title: "अध्यक्ष नोंदणी",
      subtitle: "तुमच्या बचत गटाचे नेतृत्व करा",
      intro:
        "सदस्यांमध्ये समन्वय साधण्यासाठी, बचतीवर लक्ष ठेवण्यासाठी, गटाच्या कामकाजाचे व्यवस्थापन करण्यासाठी आणि महिलांच्या आर्थिक सक्षमीकरणासाठी नारीनिधीवर अध्यक्ष म्हणून नोंदणी करा.",
      benefit1: "✓ बचत गटातील सदस्यांमध्ये समन्वय",
      benefit2: "✓ बचत आणि गटाच्या कामकाजावर देखरेख",
      benefit3: "✓ अहवाल आणि सूचना",
      accountTitle: "अध्यक्ष खाते तयार करा",
      description: "कृपया खालील माहिती भरा.",
      fullName: "पूर्ण नाव *",
      fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
      mobile: "मोबाईल क्रमांक *",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक",
      email: "ईमेल पत्ता",
      emailPlaceholder: "ईमेल लिहा (ऐच्छिक)",
      shgName: "बचत गटाचे नाव *",
      shgPlaceholder: "तुमच्या बचत गटाचे नाव लिहा",
      village: "गाव / शहर *",
      villagePlaceholder: "गावाचे किंवा शहराचे नाव लिहा",
      password: "पासवर्ड तयार करा *",
      passwordPlaceholder: "किमान ६ अक्षरे असावीत",
      confirmPassword: "पासवर्डची पुष्टी करा *",
      confirmPlaceholder: "पासवर्ड पुन्हा लिहा",
      register: "अध्यक्ष म्हणून नोंदणी करा",
      already: "आधीच खाते आहे?",
      login: "येथे लॉगिन करा",
      back: "← मुख्यपृष्ठावर परत जा",
      invalidMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक लिहा.",
      shortPassword: "पासवर्डमध्ये किमान ६ अक्षरे असणे आवश्यक आहे.",
      mismatch: "दोन्ही पासवर्ड जुळत नाहीत.",
      success:
        "फॉर्मची पडताळणी झाली. अध्यक्ष खाते सक्रिय करण्यासाठी प्रशासकाची मंजुरी आणि बॅकएंड जोडणी आवश्यक आहे.",
      footer: "© २०२६ नारीनिधी | महिला सक्षमीकरण व्यासपीठ",
    },
  };

  const t = translations[language];

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      setMessage(t.invalidMobile);
      return;
    }

    if (form.password.length < 6) {
      setMessage(t.shortPassword);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage(t.mismatch);
      return;
    }

    setMessage(t.success);
  }

  return (
    <div className="president-register-page">
      <header className="president-register-header">
        <Link to="/" className="president-register-logo">
          NariNidhi
        </Link>

        <div className="president-register-header-right">
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

          <Link
            to="/president-login"
            className="president-register-nav"
          >
            {t.navLogin}
          </Link>
        </div>
      </header>

      <main className="president-register-container">
        <section className="president-register-welcome">
          <div className="president-register-icon">👩‍💼</div>
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p>{t.intro}</p>

          <div className="president-register-benefits">
            {t.benefit1}
            <br />
            {t.benefit2}
            <br />
            {t.benefit3}
          </div>
        </section>

        <section className="president-register-card">
          <h2>{t.accountTitle}</h2>
          <p>{t.description}</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="p-fullName">{t.fullName}</label>
            <input
              id="p-fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder={t.fullNamePlaceholder}
              required
            />

            <label htmlFor="p-mobile">{t.mobile}</label>
            <input
              id="p-mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              value={form.mobile}
              onChange={handleChange}
              placeholder={t.mobilePlaceholder}
              required
            />

            <label htmlFor="p-email">{t.email}</label>
            <input
              id="p-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
            />

            <label htmlFor="p-shgName">{t.shgName}</label>
            <input
              id="p-shgName"
              name="shgName"
              value={form.shgName}
              onChange={handleChange}
              placeholder={t.shgPlaceholder}
              required
            />

            <label htmlFor="p-village">{t.village}</label>
            <input
              id="p-village"
              name="village"
              value={form.village}
              onChange={handleChange}
              placeholder={t.villagePlaceholder}
              required
            />

            <label htmlFor="p-password">{t.password}</label>
            <input
              id="p-password"
              name="password"
              type="password"
              minLength={6}
              value={form.password}
              onChange={handleChange}
              placeholder={t.passwordPlaceholder}
              required
            />

            <label htmlFor="p-confirmPassword">
              {t.confirmPassword}
            </label>
            <input
              id="p-confirmPassword"
              name="confirmPassword"
              type="password"
              minLength={6}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder={t.confirmPlaceholder}
              required
            />

            {message && (
              <p className="president-register-message" role="status">
                {message}
              </p>
            )}

            <button type="submit">{t.register}</button>
          </form>

          <p className="president-register-bottom">
            {t.already}{" "}
            <Link to="/president-login">{t.login}</Link>
          </p>

          <Link to="/" className="president-register-home">
            {t.back}
          </Link>
        </section>
      </main>

      <footer className="president-register-footer">
        {t.footer}
      </footer>
    </div>
  );
}

export default PresidentRegister;
