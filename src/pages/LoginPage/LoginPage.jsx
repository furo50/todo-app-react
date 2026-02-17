import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { authApi } from '../../utils/authApi';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
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
      const data = await authApi.login(username, password);
      login(data.token, data.username);
      navigate('/');
    } catch (err) {
      setError('Ungültige Anmeldedaten!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h1>✨ Todo App</h1>
          <p>Melde dich an um fortzufahren</p>
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
              placeholder="Dein Benutzername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              placeholder="Dein Passwort"
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
            {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
          </button>
        </form>

        <p className="auth-switch">
          Noch kein Konto?{' '}
          <Link to="/signup">Jetzt registrieren</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;