import { PixApiClient } from './client';
import type { PixStatusResponse } from './types';

export async function checkTransactionStatus(
  client: PixApiClient,
  txid: string
): Promise<PixStatusResponse> {
  return client.get('/api/v1/pixQrCode/check', { txid });
}
