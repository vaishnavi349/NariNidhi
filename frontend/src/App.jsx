
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import heroImage from "./assets/narinidhi-shg-hero.png";

function App() {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      eyebrow: "WOMEN  •  FINANCE  •  OPPORTUNITY",
      title1: "Empowering Women.",
      title2: "Building Financial Futures.",
      description:
        "A digital platform for Self-Help Groups, savings, business guidance, and government schemes.",
      getStarted: "Get Started",
      support: "Support SHGs",
      savings: "Grow Savings",
      opportunities: "Explore Opportunities",
      portal: "ACCESS YOUR PORTAL",
      chooseRole: "Choose Your Role",
      footer: "Women Empowerment Platform",
      slogan: "Together for a Self-Reliant India",
      roles: [
        {
          name: "Member",
          description: "Savings and SHG activities",
          path: "/member-login",
          icon: "users",
        },
        {
          name: "President",
          description: "Group leadership and coordination",
          path: "/president-login",
          icon: "crown",
        },
        {
          name: "Secretary",
          description: "Records, meetings and information",
          path: "/secretary-login",
          icon: "file",
        },
        {
          name: "Higher CRP",
          description: "Verification and community support",
          path: "/higher-crp-login",
          icon: "people",
        },
        {
          name: "Admin",
          description: "Monitoring and scheme implementation",
          path: "/admin-login",
          icon: "shield",
        },
      ],
    },
    mr: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      contact: "संपर्क",
      eyebrow: "महिला • आर्थिक प्रगती • संधी",
      title1: "महिलांचे सक्षमीकरण.",
      title2: "आर्थिक भविष्याची उभारणी.",
      description:
        "बचत गट, बचत, व्यवसाय मार्गदर्शन आणि शासकीय योजनांसाठी एक डिजिटल व्यासपीठ.",
      getStarted: "सुरुवात करा",
      support: "बचत गटांना मदत",
      savings: "बचत वाढवा",
      opportunities: "संधी शोधा",
      portal: "तुमच्या पोर्टलवर प्रवेश करा",
      chooseRole: "तुमची भूमिका निवडा",
      footer: "महिला सक्षमीकरण व्यासपीठ",
      slogan: "आत्मनिर्भर भारतासाठी एकत्र",
      roles: [
        {
          name: "सदस्य",
          description: "बचत आणि बचत गटातील उपक्रम",
          path: "/member-login",
          icon: "users",
        },
        {
          name: "अध्यक्षा",
          description: "गटाचे नेतृत्व आणि समन्वय",
          path: "/president-login",
          icon: "crown",
        },
        {
          name: "सचिव",
          description: "नोंदी, बैठका आणि माहिती",
          path: "/secretary-login",
          icon: "file",
        },
        {
          name: "उच्च CRP",
          description: "पडताळणी आणि समुदाय सहाय्य",
          path: "/higher-crp-login",
          icon: "people",
        },
        {
          name: "प्रशासक",
          description: "देखरेख आणि योजनांची अंमलबजावणी",
          path: "/admin-login",
          icon: "shield",
        },
      ],
    },
  };

  const t = translations[language];

  const roleIcons = {
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2z" />
        <path d="M16 15a5 5 0 0 1 5 5" />
      </>
    ),
    crown: (
      <>
        <path d="m3 8 5 4 4-7 4 7 5-4-2 12H5z" />
        <path d="M6 16h12" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h7M9 16h7" />
      </>
    ),
    people: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="10" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M5 20v-2a7 7 0 0 1 14 0v2z" />
        <path d="M1 19v-2a4 4 0 0 1 3-4M23 19v-2a4 4 0 0 0-3-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  };

  return (
    <div className="nari-page">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-copy">
            <strong>NariNidhi</strong>
            <small>Empowering Women • Building Better Futures</small>
          </span>
        </Link>

        <nav className="main-nav">
          <a className="active" href="#home">{t.home}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <label className="language-select">
          <span aria-hidden="true">◎</span>
          <select
            aria-label="Select language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>
          <span className="language-chevron">⌄</span>
        </label>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow}</p>

            <h1>
              {t.title1}
              <span>{t.title2}</span>
            </h1>

            <p className="hero-description">{t.description}</p>

            <a href="#roles" className="primary-button">
              {t.getStarted}
              <span aria-hidden="true">→</span>
            </a>

            <div className="hero-benefits">
              <div className="benefit">
                <span className="benefit-icon">♧</span>
                <span>{t.support}</span>
              </div>
              <span className="benefit-divider" />
              <div className="benefit">
                <span className="benefit-icon">₹</span>
                <span>{t.savings}</span>
              </div>
              <span className="benefit-divider" />
              <div className="benefit">
                <span className="benefit-icon">↗</span>
                <span>{t.opportunities}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={heroImage}
                alt="Indian women working together in a Self-Help Group"
              />
              <div className="image-caption">
                <span className="caption-dot" />
                <span>Stronger Together</span>
              </div>
            </div>
            <div className="floating-note">
              <span className="note-icon">✦</span>
              <div>
                <strong>Women. Progress. Prosperity.</strong>
                <small>Building brighter futures together</small>
              </div>
            </div>
          </div>
        </section>

        <section className="roles-section" id="roles">
          <div className="section-heading">
            <p className="eyebrow">{t.portal}</p>
            <h2>{t.chooseRole}</h2>
            <p>
              Choose your role to access your NariNidhi account and services.
            </p>
          </div>

          <div className="role-grid">
            {t.roles.map((role, index) => (
              <Link
                to={role.path}
                className={`role-card role-card-${index + 1}`}
                key={role.path}
              >
                <div className="role-card-top">
                  <span className="role-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {roleIcons[role.icon]}
                    </svg>
                  </span>
                  <span className="role-arrow" aria-hidden="true">↗</span>
                </div>

                <h3>{role.name}</h3>
                <p>{role.description}</p>
                <span className="role-access">
                  {language === "en" ? "Access portal" : "पोर्टल उघडा"}
                  <span aria-hidden="true"> →</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-strip" id="about">
          <div className="about-symbol">✿</div>
          <div>
            <h2>
              {language === "en"
                ? "Every woman deserves an opportunity to grow."
                : "प्रत्येक महिलेला प्रगतीची संधी मिळाली पाहिजे."}
            </h2>
            <p>
              {language === "en"
                ? "Supporting self-help groups with digital access to savings, enterprise guidance and public schemes."
                : "बचत, व्यवसाय मार्गदर्शन आणि शासकीय योजनांसाठी बचत गटांना डिजिटल सहाय्य."}
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <Link to="/" className="footer-brand">NariNidhi</Link>
        <p>© 2026 NariNidhi | {t.footer}</p>
        <span>{t.slogan}</span>
      </footer>
    </div>
  );
}

export default App;
