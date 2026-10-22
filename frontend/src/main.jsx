import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MemberLogin from './MemberLogin.jsx'
import MemberRegister from "./MemberRegister";
import PresidentRegister from "./PresidentRegister";
import PresidentLogin from "./PresidentLogin";
import SecretaryLogin from "./SecretaryLogin";
import SecretaryRegister from "./SecretaryRegister";
import HigherCRPLogin from "./HigherCRPLogin";
import HigherCRPRegister from "./HigherCRPRegister";

function RoleLogin({ role }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        width: '350px',
        padding: '35px',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 35px rgba(0,0,0,0.12)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#7c3aed' }}>NariNidhi</h1>
        <h2>{role} Login</h2>
        <p style={{ color: '#666' }}>
          Sign in to your {role} account
        </p>

        <form onSubmit={(e) => {
          e.preventDefault()
          alert('Login page created. Backend authentication is not connected yet.')
        }}>
          <input
            type="text"
            placeholder="Mobile number or username"
            required
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              boxSizing: 'border-box',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          />

          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0 20px',
              boxSizing: 'border-box',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#7c3aed',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Login
          </button>
        </form>

        <button
          onClick={() => window.location.href = '/'}
          style={{
            marginTop: '20px',
            background: 'none',
            border: 'none',
            color: '#7c3aed',
            cursor: 'pointer'
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/member-login" element={<MemberLogin />} />
        <Route
  path="/member-register"
  element={<MemberRegister />}
/>
        <Route
  path="/president-login"
  element={<PresidentLogin />}
/>
        <Route
  path="/president-register"
  element={<PresidentRegister />}
/>
        <Route
  path="/secretary-login"
  element={<SecretaryLogin />}
/>
         <Route
   path="/secretary-register"
   element={<SecretaryRegister />}
  />
         
        <Route
  path="/higher-crp-login"
  element={<HigherCRPLogin />}
/>

<Route
  path="/higher-crp-register"
  element={<HigherCRPRegister />}
/>
        <Route
          path="/admin-login"
          element={<RoleLogin role="Admin" />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)