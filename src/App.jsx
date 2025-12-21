
import React, { useState } from 'react';
import Header from './components/Header';
import FormStep from './components/FormStep';
import PaymentStep from './components/PaymentStep';
import SuccessStep from './components/SuccessStep';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    questions: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      minHeight: '100vh',
      background: '#F8F9FA'
    }}>
      <Header />
      
      <main style={{ padding: '24px 20px 40px 20px' }}>
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
            onBack={() => setStep(1)} // Reset or go back to start
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

export default App;
