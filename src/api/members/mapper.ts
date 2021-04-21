import { StateKey } from '../../models/state';
import { Member, MembersResponse } from './member';

export function membersFromJSON(data: unknown): Member[] {
  if (!validateMembersResponse(data)) {
    throw new Error('Invalid response');
  }

  if (data.results.length <= 0) {
    throw new Error('No members found');
  }

  return data.results
    .map((value) =>
      value.members
        .filter((item) => item.in_office)
        .map((item) => ({ ...item, chamber: value.chamber })),
    )
    .flat();
}

function validateMembersResponse(data: unknown): data is MembersResponse {
  return data !== undefined && data !== null;
}
