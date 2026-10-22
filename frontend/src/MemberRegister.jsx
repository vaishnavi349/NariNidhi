
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MemberRegister.css";

function MemberRegister() {
  const navigate = useNavigate();

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
      loginNav: "Already registered? Login",
      welcomeTitle: "Join NariNidhi",
      welcomeSubtitle: "Empowering Women, Building Futures",
      welcomeDescription:
        "Create your member account to connect with your Self-Help Group, manage savings, explore business opportunities, and access government schemes.",
      benefit1: "✓ SHG participation",
      benefit2: "✓ Business opportunities",
      benefit3: "✓ Government scheme information",
      accountTitle: "Create Your Account",
      description: "Enter your details to register as a member.",
      fullName: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      mobile: "Mobile Number *",
      mobilePlaceholder: "Enter 10-digit mobile number",
      email: "Email Address",
      emailPlaceholder: "Enter your email (optional)",
      shgName: "SHG Name *",
      shgPlaceholder: "Enter your Self-Help Group name",
      village: "Village / City *",
      villagePlaceholder: "Enter your village or city",
      password: "Create Password *",
      passwordPlaceholder: "Minimum 6 characters",
      confirmPassword: "Confirm Password *",
      confirmPlaceholder: "Re-enter your password",
      register: "Register as Member",
      already: "Already have an account?",
      login: "Login here",
      back: "← Back to Home",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      shortPassword: "Password must contain at least 6 characters.",
      mismatch: "Passwords do not match.",
      success:
        "Registration form validated! Backend connection is required to save your account.",
      footer: "© 2026 NariNidhi | Women Empowerment Platform",
    },

    mr: {
      loginNav: "आधीच नोंदणी केली आहे? लॉगिन करा",
      welcomeTitle: "नारीनिधीमध्ये सामील व्हा",
      welcomeSubtitle: "महिला सक्षमीकरण, उज्ज्वल भविष्य",
      welcomeDescription:
        "तुमच्या बचत गटाशी जोडण्यासाठी, बचतीचे व्यवस्थापन करण्यासाठी, व्यवसायाच्या संधी शोधण्यासाठी आणि सरकारी योजनांची माहिती मिळवण्यासाठी सदस्य खाते तयार करा.",
      benefit1: "✓ बचत गटातील सहभाग",
      benefit2: "✓ व्यवसायाच्या संधी",
      benefit3: "✓ सरकारी योजनांची माहिती",
      accountTitle: "तुमचे खाते तयार करा",
      description: "सदस्य म्हणून नोंदणी करण्यासाठी तुमची माहिती भरा.",
      fullName: "पूर्ण नाव *",
      fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
      mobile: "मोबाईल क्रमांक *",
      mobilePlaceholder: "१० अंकी मोबाईल क्रमांक लिहा",
      email: "ईमेल पत्ता",
      emailPlaceholder: "तुमचा ईमेल लिहा (ऐच्छिक)",
      shgName: "बचत गटाचे नाव *",
      shgPlaceholder: "तुमच्या बचत गटाचे नाव लिहा",
      village: "गाव / शहर *",
      villagePlaceholder: "तुमच्या गावाचे किंवा शहराचे नाव लिहा",
      password: "पासवर्ड तयार करा *",
      passwordPlaceholder: "किमान ६ अक्षरे असावीत",
      confirmPassword: "पासवर्डची पुष्टी करा *",
      confirmPlaceholder: "पासवर्ड पुन्हा लिहा",
      register: "सदस्य म्हणून नोंदणी करा",
      already: "आधीच खाते आहे?",
      login: "येथे लॉगिन करा",
      back: "← मुख्यपृष्ठावर परत जा",
      invalidMobile: "कृपया वैध १० अंकी मोबाईल क्रमांक लिहा.",
      shortPassword: "पासवर्डमध्ये किमान ६ अक्षरे असणे आवश्यक आहे.",
      mismatch: "दोन्ही पासवर्ड जुळत नाहीत.",
      success:
        "नोंदणी फॉर्मची पडताळणी झाली! खाते जतन करण्यासाठी बॅकएंड जोडणे आवश्यक आहे.",
      footer: "© २०२६ नारीनिधी | महिला सक्षमीकरण व्यासपीठ",
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
    <div className="register-page">
      <header className="register-header">
        <Link to="/" className="register-logo">
          NariNidhi
        </Link>

        <div className="register-header-actions">
          <select
            aria-label="Select language"
            value={language}
            onChange={(event) => {
              setLanguage(event.target.value);
              setMessage("");
            }}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>

          <Link to="/member-login" className="register-login-link">
            {t.loginNav}
          </Link>
        </div>
      </header>

      <main className="register-container">
        <section className="register-welcome">
          <div className="register-icon">🌸</div>
          <h1>{t.welcomeTitle}</h1>
          <h2>{t.welcomeSubtitle}</h2>
          <p>{t.welcomeDescription}</p>

          <div className="register-benefits">
            {t.benefit1}
            <br />
            {t.benefit2}
            <br />
            {t.benefit3}
          </div>
        </section>

        <section className="register-card">
          <h2>{t.accountTitle}</h2>
          <p className="register-description">{t.description}</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">{t.fullName}</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder={t.fullNamePlaceholder}
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobile">{t.mobile}</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              pattern="[6-9][0-9]{9}"
              placeholder={t.mobilePlaceholder}
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">{t.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="shgName">{t.shgName}</label>
            <input
              id="shgName"
              name="shgName"
              type="text"
              placeholder={t.shgPlaceholder}
              value={formData.shgName}
              onChange={handleChange}
              required
            />

            <label htmlFor="village">{t.village}</label>
            <input
              id="village"
              name="village"
              type="text"
              placeholder={t.villagePlaceholder}
              value={formData.village}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">{t.password}</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder={t.passwordPlaceholder}
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
            />

            <label htmlFor="confirmPassword">
              {t.confirmPassword}
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t.confirmPlaceholder}
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={6}
              required
            />

            {message && (
              <p
                className={
                  message === t.success
                    ? "register-message"
                    : "register-error"
                }
                role="status"
              >
                {message}
              </p>
            )}

            <button type="submit" className="register-submit">
              {t.register}
            </button>
          </form>

          <p className="register-bottom-text">
            {t.already}{" "}
            <Link to="/member-login">{t.login}</Link>
          </p>

          <Link to="/" className="register-back-home">
            {t.back}
          </Link>
        </section>
      </main>

      <footer className="register-footer">{t.footer}</footer>
    </div>
  );
}

export default MemberRegister;
