import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Login.css';

const Login = ({ showLogin, setShowLogin}) => {
  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
     <div className={`app-container ${showLogin ? 'blur-background' : ''}`}>
        <AnimatePresence>
            {showLogin && (
                <motion.div
                  className="login-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                 <div className="login-container">
                    <button className="close-button" onClick={closeLogin}>X</button>
                    
                    <h2>Inicio Sesion</h2>

                    {/* Formulario de Inicio de sesion */}
                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Correo electronico:</label>
                            <imput type= "email" id= "login-email" placeholder="Ingresa tu correo"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <imput type= "password" id= "login-password" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <button type="submit" classname='submit-button'>Iniciar sesion</button>
                    </form>
                    </div>   
                </motion.div> 
            )}
        </AnimatePresence>
     </div>
  );
};

export default Login;


