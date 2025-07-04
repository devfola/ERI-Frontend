import { useState, useCallback } from 'react';
import { Contract, ContractAddress, AccountInterface, ProviderInterface } from 'starknet';
import { ContractType } from '../types';
import { getContract } from '../lib/blockchain';
import { handleError } from '../lib/errorParser';

export const useContract = () => {
  const [loading, setLoading] = useState(false);

  const executeContractCall = useCallback(async <T>(
    contractAddress: ContractAddress,
    contractType: ContractType,
    provider: ProviderInterface,
    account: AccountInterface | null,
    address: ContractAddress | null,
    operation: (contract: Contract) => Promise<T>,
    errorMessage?: string
  ): Promise<T | null> => {
    setLoading(true);
    try {
      const contract = await getContract(contractAddress, contractType, provider, account, address);
      const result = await operation(contract);
      return result;
    } catch (error: unknown) {
      handleError(error, errorMessage || 'Contract operation failed');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    executeContractCall,
  };
};