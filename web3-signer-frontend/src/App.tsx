import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import MessageForm from './components/MessageForm';

function App() {
  const { user, primaryWallet, setShowAuthFlow, handleLogOut } = useDynamicContext();

  return (
    <div style={{ padding: 24 }}>
      <h1>Web3 signer</h1>
      <DynamicWidget />
      {user ? (
        <div style={{ marginTop: 20 }}>
          <h2>Welcome, {user.email || user.username || 'User'}!</h2>
          <p><b>Wallet:</b> {primaryWallet?.address ?? 'No wallet connected'}</p>
          <button onClick={handleLogOut}>Logout</button>
          <MessageForm />
        </div>
      ) : (
        <button onClick={() => setShowAuthFlow(true)}>Log in</button>
      )}
    </div>
  );
}

export default App;
