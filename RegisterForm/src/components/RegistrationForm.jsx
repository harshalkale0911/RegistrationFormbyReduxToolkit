import { registerAsync, setField } from './RegisterSlice.jsx';
 
 import { useDispatch, useSelector } from 'react-redux';

function RegistrationForm() {
  const dispatch = useDispatch();
  const { username, email, password, loading, success, error } = useSelector((state) => state.register);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, password };
    dispatch(registerAsync(formData));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Register</h2>
      {success ? (
        <div style={{ color: 'green' }}>Registration Successful!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
            {loading ? 'Submitting...' : 'Register'}
          </button>

          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
