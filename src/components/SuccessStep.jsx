
import React, { useRef } from 'react';
import { Mail, ArrowLeft, Send, Copy, Check } from 'lucide-react';

const SuccessStep = ({ formData, onBack }) => {
  const [copied, setCopied] = React.useState(false);
  
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Solicitação de Mesa Radiônica - ${formData.fullName}`);
    const body = encodeURIComponent(
`Olá Rudáia,

Gostaria de solicitar uma Mesa Radiônica.
Segue meus dados e o comprovante de pagamento em anexo.

Nome: ${formData.fullName}
Data de Nascimento: ${formData.dob}

Perguntas / Foco:
${formData.questions}

---------------------------
(Por favor, anexe o comprovante de pagamento a este e-mail antes de enviar)

*Estou ciente que receberei o áudio da mesa em até 5 dias após o envio deste comprovante.*
`
    );
    return `mailto:rudaiacorreia@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSendEmail = () => {
    const link = generateMailtoLink();
    // Try to open using window.open which is sometimes better handled
    window.open(link, '_blank');
  };

  const mailtoLink = generateMailtoLink();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rudaiacorreia@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fade-in">
      <h2 className="title">Quase lá!</h2>
      <p className="subtitle">Finalize sua solicitação enviando o comprovante</p>

      <div className="card" style={{textAlign: 'center'}}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%', background: '#E6C068', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto',
          color: 'white'
        }}>
          <Mail size={32} />
        </div>
        <h3 style={{color: '#4A5568', marginBottom: '12px'}}>Passo Final</h3>
        <p style={{fontSize: '0.95rem', marginBottom: '20px'}}>
          Estamos prontos para receber sua solicitação! Clique no botão abaixo para abrir seu e-mail já preenchido.
        </p>
        <p style={{fontSize: '0.9rem', color: '#E6C068', fontWeight: 'bold', background: '#FFF8E1', padding: '10px', borderRadius: '8px'}}>
          ⚠️ Lembre-se de anexar o comprovante de pagamento.
        </p>
        <p style={{fontSize: '0.9rem', color: '#718096', marginTop: '12px', fontStyle: 'italic'}}>
          ℹ️ Após a confirmação, o áudio da sua mesa será enviado em até 5 dias.
        </p>
      </div>

      <a 
        href={mailtoLink}
        className="btn-primary" 
        style={{marginBottom: '16px', textDecoration: 'none'}}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Send size={18} /> Abrir E-mail e Anexar Comprovante
      </a>

      <div style={{textAlign: 'center', marginBottom: '20px', fontSize: '0.9rem', color: '#718096'}}>
        <p>O botão não funcionou?</p>
        <p>Envie manualmente para: <br/>
          <span style={{fontWeight: 'bold', color: '#9B7EBD'}}>rudaiacorreia@gmail.com</span>
          <button 
            onClick={handleCopyEmail}
            style={{
              background: 'none', border: 'none', marginLeft: '8px', 
              cursor: 'pointer', verticalAlign: 'middle', color: '#9B7EBD'
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </p>
      </div>

      <button 
        style={{
          background: 'none', 
          border: 'none', 
          color: '#9B7EBD', 
          width: '100%', 
          padding: '10px', 
          cursor: 'pointer',
          fontWeight: '600'
        }}
        onClick={onBack}
      >
        Voltar e revisar dados
      </button>
    </div>
  );
};

export default SuccessStep;
