import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

type Transaction = {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  createdAt: Date;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsProviderPorps = {
  children: ReactNode;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderPorps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await api.get('/transactions');

      setTransactions(response.data.transactions);
    };

    loadTransactions();
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });

    const { transaction: newTransaction } = response.data;

    setTransactions(state => [...state, newTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
