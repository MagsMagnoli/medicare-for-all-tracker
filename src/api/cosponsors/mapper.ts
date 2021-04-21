import { Bill, BillsResponse } from './cosponsor';

export function billFromJSON(data: unknown): Bill {
  if (!validateBillResponse(data)) {
    throw new Error('Invalid response');
  }

  if (data.results.length <= 0) {
    throw new Error('No bills found');
  }

  return data.results[0];
}

function validateBillResponse(data: unknown): data is BillsResponse {
  return data !== undefined && data !== null;
}
