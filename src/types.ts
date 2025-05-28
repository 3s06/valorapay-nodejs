export interface PixTransactionPayload {
  amount: number;
  customer: {
    name: string;
    document: string;
  };
}

export interface PixTransactionResponse {
  data: {
    id: string;
    amount: number;
    status: string;
    pixCopiaECola: string;
    platformFee: number;
    createdAt: string;
    updatedAt: string;
    expiresAt: string;
  };
}

export interface PixStatusResponse {
  status: 'PENDING' | 'PAID' | 'FAILED' | 'EXPIRED' | 'REFUNDED';
  expiresAt: string;
}