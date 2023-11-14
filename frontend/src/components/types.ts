export interface BalanceTransactionObject {
  id: string; // 'txn_1NHkYDPJvti7ia2TUE9iQrZd';
  object: string; // 'balance_transaction';
  amount: number; // -100;
  available_on: number; // 1686475629;
  created: number; // 1686475629;
  currency: string; // 'sgd';
  description: string; // null;
  exchange_rate: number; // null;
  fee: number; // 0;
  fee_details: object[]; // [];
  net: number; // -100;
  reporting_category: string; // 'payout';
  source: string; // 'po_1NHkYDPJvti7ia2TaRTvsST9';
  status: TransactionStatus; // 'available' | 'pending;
  type: TransactionType; // 'payout';
}

export type TransactionType = 'payment' | 'payout';

export type TransactionStatus = 'available' | 'pending';
