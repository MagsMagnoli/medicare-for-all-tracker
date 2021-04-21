import { useEffect, useState } from 'react';
import { Cosponsor } from '../api/cosponsors/cosponsor';
import { getBillSponsors } from '../api/cosponsors/getBillCosponsors';
import { getMembers } from '../api/members/getMembers';
import { Config } from '../config/config';
import { CongressPerson } from '../models/congressperson';
import { congressPersonMapper } from '../models/mapper';

const useCongressData = () => {
  const [data, setData] = useState<CongressPerson[]>([]);

  async function fetch() {
    const members = await getMembers(Config.apiKey, Config.congress);
    const { sponsorId, cosponsorIds } = await getBillSponsors(
      Config.apiKey,
      Config.congress,
      Config.billId,
    );

    const cosponsorsById = cosponsorIds.reduce(
      (arr: Record<string, boolean>, curr) => ({
        ...arr,
        [curr]: true,
      }),
      {},
    );

    const congressPeople = members
      .map((value) => congressPersonMapper(value, sponsorId, cosponsorsById))
      .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

    setData(congressPeople);
  }

  useEffect(() => {
    fetch();
  }, []);

  return data;
};

export default useCongressData;
