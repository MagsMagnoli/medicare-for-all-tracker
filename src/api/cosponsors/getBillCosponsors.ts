import { billFromJSON } from './mapper';

export async function getBillSponsors(
  apiKey: string,
  congress: string,
  billId: string,
): Promise<{ sponsorId: string; cosponsorIds: string[] }> {
  const response = await fetch(
    `https://api.propublica.org/congress/v1/${congress}/bills/${billId}/cosponsors.json`,
    {
      headers: {
        'X-API-Key': apiKey,
      },
    },
  );

  const bill = billFromJSON(await response.json());

  return {
    sponsorId: bill.sponsor_id,
    cosponsorIds: bill.cosponsors.map((item) => item.cosponsor_id),
  };
}
