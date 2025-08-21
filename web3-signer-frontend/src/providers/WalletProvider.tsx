import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '1d1fb846-18a8-4d41-a5a5-8da2395cf19c',
        walletConnectors: [EthereumWalletConnectors], 
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
