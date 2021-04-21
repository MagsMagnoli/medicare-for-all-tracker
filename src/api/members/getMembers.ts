import { membersFromJSON } from './mapper';
import { Member } from './member';

export async function getMembers(
  apiKey: string,
  congress: string,
): Promise<Member[]> {
  const promises = [];

  for (const chamber of ['senate', 'house']) {
    promises.push(
      fetch(
        `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`,
        {
          headers: {
            'X-API-Key': apiKey,
          },
        },
      ),
    );
  }

  const responses = await Promise.all(promises);

  let members: Member[] = [];

  for (const response of responses) {
    members = members.concat(membersFromJSON(await response.json()));
  }

  return members;
}
