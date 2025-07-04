import { useCallback } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { toast } from 'react-toastify';

export const useWalletConnection = () => {
  const { isConnected, connectWallet } = useWallet();

  const requireWalletConnection = useCallback(() => {
    if (!isConnected) {
      toast.error('Please connect your wallet to continue');
      connectWallet();
      return false;
    }
    return true;
  }, [isConnected, connectWallet]);

  return {
    isConnected,
    requireWalletConnection,
  };
};