
import React, { useState } from 'react';
import { CreditCard, Globe, ArrowRight, ArrowLeft, Copy, Check } from 'lucide-react';

const PaymentStep = ({ onNext, onBack }) => {
  const [currency, setCurrency] = useState('BRL');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fade-in">
      <h2 className="title">Pagamento</h2>
      <p className="subtitle">Escolha a forma de pagamento</p>

      <div className="radio-group">
        <div 
          className={`radio-option ${currency === 'BRL' ? 'active' : ''}`}
          onClick={() => setCurrency('BRL')}
        >
          <CreditCard size={20} style={{marginBottom: '4px'}} /><br/>
          Brasil (Pix)
        </div>
        <div 
          className={`radio-option ${currency === 'INTL' ? 'active' : ''}`}
          onClick={() => setCurrency('INTL')}
        >
          <Globe size={20} style={{marginBottom: '4px'}} /><br/>
          Internacional
        </div>
      </div>

      <div className="card">
        {currency === 'BRL' ? (
          <div>
            <h3 style={{color: '#9B7EBD', marginBottom: '10px'}}>Dados Pix</h3>
            <p style={{fontSize: '0.9rem', color: '#718096'}}>Chave Pix (E-mail):</p>
            <div style={{
              background: '#F8F9FA', 
              padding: '12px', 
              borderRadius: '8px', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: '600',
              marginBottom: '10px',
              wordBreak: 'break-all'
            }}>
              <span>rudaiacorreia@gmail.com</span>
              <button onClick={() => handleCopy('rudaiacorreia@gmail.com')} style={{background:'none', border:'none', cursor:'pointer', color:'#9B7EBD'}}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <p style={{marginTop: '16px', fontWeight: 'bold'}}>Valor: R$ 300,00</p>
          </div>
        ) : (
          <div>
            <h3 style={{color: '#9B7EBD', marginBottom: '10px'}}>Transferência Internacional</h3>
            <div style={{fontSize: '0.85rem', color: '#4A5568'}}>
              <p><strong>Beneficiary:</strong> RUDAIA GUIMARAES CORREIA</p>
              <p><strong>IBAN / Account:</strong> BR2400416968000010204708729C1</p>
              
              <div style={{marginTop: '12px', padding: '10px', background: '#F8F9FA', borderRadius: '8px'}}>
                <p><strong>Intermediary Bank (Field 56):</strong><br/> JP Morgan AG (SWIFT: CHASDEFX)<br/>Address: Taunustor 1, Frankfurt, Germany</p>
              </div>

              <div style={{marginTop: '12px', padding: '10px', background: '#F8F9FA', borderRadius: '8px'}}>
                <p><strong>Destination Bank (Field 57):</strong><br/> Banco Inter S.A. (SWIFT: ITEMBRSP)<br/>Address: 1219 Barbacena Ave, BH, Brazil</p>
              </div>
            </div>
            <p style={{marginTop: '16px', fontWeight: 'bold', fontSize: '0.9rem', color: '#E6C068'}}>Valor: Equivalente a R$ 300,00 (USD/EUR)</p>
          </div>
        )}
      </div>

      <div style={{display: 'flex', gap: '10px'}}>
        <button 
          className="btn-secondary" 
          onClick={onBack}
          style={{flex: 1}}
        >
          <ArrowLeft size={18} /> Voltar
        </button>
        <button 
          className="btn-primary" 
          onClick={onNext}
          style={{flex: 1}}
        >
          Já fiz o pagamento <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;
