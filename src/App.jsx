
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import FormStep from './components/FormStep';
import PaymentStep from './components/PaymentStep';
import SuccessStep from './components/SuccessStep';
import Home from './components/Home';

function RequestFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    questions: ''
  });
  const navigate = useNavigate();

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const goHome = () => navigate('/');

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      minHeight: '100vh',
      background: '#F8F9FA'
    }}>
      {/* Reusing the simple header for the request flow, or could make it cleaner */}
      <Header />
      
      <main style={{ padding: '24px 20px 40px 20px' }}>
         <button 
           onClick={goHome}
           style={{
             background: 'none', 
             border: 'none', 
             color: '#9B7EBD', 
             cursor: 'pointer', 
             marginBottom: '10px',
             fontWeight: '600',
             display: 'flex',
             alignItems: 'center',
             gap: '4px'
           }}
         >
           ← Voltar para o Site
         </button>

        {step === 1 && (
          <FormStep 
            formData={formData} 
            setFormData={setFormData} 
            onNext={nextStep} 
          />
        )}

        {step === 2 && (
          <PaymentStep 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 3 && (
          <SuccessStep 
            formData={formData} 
            onBack={() => setStep(1)} 
          />
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        color: '#A0AEC0',
        fontSize: '0.9rem'
      }}>
        © 2025 Rudaia Correia
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitar" element={<RequestFlow />} />
      </Routes>
    </Router>
  );
}

export default App;
