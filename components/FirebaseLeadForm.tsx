"use client";

import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase';

interface FirebaseLeadFormProps {
  onSuccess?: () => void;
}

const FirebaseLeadForm: React.FC<FirebaseLeadFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      await addDoc(collection(db, "leads"), {
        name,
        email,
        whatsapp,
        timestamp: new Date(),
      });
      setMessage('✅ Cadastro confirmado. Bem-vindo ao CT Stronger Fitness!');
      setName('');
      setEmail('');
      setWhatsapp('');
      if (onSuccess) onSuccess();
    } catch (e) {
      console.error("Erro ao salvar lead:", e);
      setMessage('❌ Erro ao enviar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6 space-y-5 font-mono relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-center">
        CT Stronger Fitness
        </h2>
        {message && (
          <div className={`text-center text-sm font-semibold ${message.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </div>
        )}
        <div>
          <label htmlFor="name" className="block text-zinc-400 mb-1">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-zinc-400 mb-1">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Seu e-mail"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-zinc-400 mb-1">WhatsApp:</label>
          <input
            type="text"
            id="whatsapp"
            value={whatsapp}
            required
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Ex: (99) 99999-9999"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {submitting ? 'ENVIANDO...' : 'CONFIRMAR CADASTRO'}
        </button>
        <p className="text-xs text-center text-zinc-500 pt-4">
          Seus dados estão protegidos. Usamos apenas para contato da equipe CT Stronger Fitness.
        </p>
      </form>
    </div>
  );
};

export default FirebaseLeadForm; 