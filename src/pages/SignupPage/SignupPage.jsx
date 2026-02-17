import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { authApi } from '../../utils/authApi';
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Erst registrieren
      await authApi.signup(username, email, password);
      
      // Dann direkt einloggen
      const data = await authApi.login(username, password);
      login(data.token, data.username);
      navigate('/');
    } catch (err) {
      setError(err.response?.data || 'Registrierung fehlgeschlagen!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h1>✨ Todo App</h1>
          <p>Erstelle dein Konto</p>
        </div>

        {error && (
          <div className="auth-error">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Benutzername</label>
            <input
              id="username"
              type="text"
              placeholder="Wähle einen Benutzernamen"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Deine Email-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              placeholder="Wähle ein sicheres Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Wird registriert...' : 'Registrieren'}
          </button>
        </form>

        <p className="auth-switch">
          Bereits ein Konto?{' '}
          <Link to="/login">Jetzt anmelden</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;