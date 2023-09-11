import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import Button from '../../components/common/Button/Button';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here (e.g., API call)
  };

  return (
    <div className="login-page">
      <Navbar />
      <main>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
