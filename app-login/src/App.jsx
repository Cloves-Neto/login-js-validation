import React, { useState } from 'react';
import InputField from './components/input-field';


export default function App() {
  // VALIDAÇÃO DE DADOS DO FORMULÁRIO
  
  // Email
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  //Senha
  const [senha, setSenha] = useState('');
  const [senhaError, setSenhaError] = useState('');
  

  //LÓGICA EMAIL
  const handleEmailChange = (event) => {

    setEmail(event.target.value);
    
    // validação do username
    if (event.target.value == "teste@email.com") {
      setEmailError('');
    } else {
      setEmailError('Desculpe, esse email não esta cadastrado!');
    }
  };
  //LÓGICA SENHA
  const handleSenhaChange = (event) => {

    setSenha(event.target.value);
    
    // validação do senha
    if (event.target.value == "teste123") {
      setSenhaError('');
    } else {
      setSenhaError('Senha incorreta');
    }
  };

  return (
  <>
  <div className="container">
    <form id="form-login" name="form-login" className="form-login" action="./scripts/valida.js" method="get">
        <div className="wrap">
          <InputField label="Email" type="email" id="email" name="email" error={emailError} onChange={handleEmailChange}/>
          <InputField label="Senha" type="senha" id="senha" name="senha" error={senhaError} onChange={handleSenhaChange}/>
          <small>esqueci a senha</small>
        </div>
        <div className="wrap">
            <input type="submit" value="ENTRAR"/>
        </div>

    </form>
  </div>
  </>
  )
}


