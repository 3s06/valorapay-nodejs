import { PixApiClient } from './client';
import type { PixTransactionPayload, PixTransactionResponse } from './types';

export async function createTransaction(
  client: PixApiClient,
  payload: PixTransactionPayload
): Promise<PixTransactionResponse> {
  return client.post('/api/v1/pixQrCode/create', payload);
}
