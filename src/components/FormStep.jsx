
import React from 'react';
import { User, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const FormStep = ({ formData, setFormData, onNext }) => {
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = formData.fullName && formData.dob && formData.questions;

  return (
    <div className="fade-in">
      <h2 className="title">Solicitar Mesa</h2>
      <p className="subtitle">Preencha seus dados para iniciar o atendimento</p>

      <div className="card">
        <div className="input-group">
          <label className="input-label" htmlFor="fullName">Nome Completo</label>
          <div style={{ position: 'relative' }}>
            <User size={18} color="#9B7EBD" style={{ position: 'absolute', left: '12px', top: '14px' }} />
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input-field"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ex: Maria Silva"
              style={{ paddingLeft: '40px' }}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="dob">Data de Nascimento</label>
          <div style={{ position: 'relative' }}>
            <Calendar size={18} color="#9B7EBD" style={{ position: 'absolute', left: '12px', top: '14px' }} />
            <input
              type="date"
              id="dob"
              name="dob"
              className="input-field"
              value={formData.dob}
              onChange={handleChange}
              style={{ paddingLeft: '40px' }}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="questions">Perguntas / Foco da Mesa</label>
          <div style={{ position: 'relative' }}>
            <MessageCircle size={18} color="#9B7EBD" style={{ position: 'absolute', left: '12px', top: '14px' }} />
            <textarea
              id="questions"
              name="questions"
              className="textarea-field"
              value={formData.questions}
              onChange={handleChange}
              placeholder="Descreva o que deseja trabalhar na mesa (saúde, relacionamentos, financeiro, etc)..."
              style={{ paddingLeft: '40px' }}
            />
          </div>
        </div>
      </div>

      <button 
        className="btn-primary" 
        onClick={onNext}
        disabled={!isValid}
      >
        Continuar <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default FormStep;
