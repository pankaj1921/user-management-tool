import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // clear token
    navigate('/'); // redirect to login
  };

  return (
    <div style={{ maxWidth: 500, margin: '50px auto' }}>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleLogout} style={{ padding: 10, marginTop: 20 }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

