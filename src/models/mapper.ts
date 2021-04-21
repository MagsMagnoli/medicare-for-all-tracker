import { Member } from '../api/members/member';
import { Chamber, CongressPerson, Party } from './congressperson';
import { StateKey, TerritoryKey } from './state';

export function congressPersonMapper(
  member: Member,
  sponsorId: string,
  cosponsorsById: Record<string, boolean>,
): CongressPerson {
  return {
    id: member.id,
    firstName: member.first_name,
    lastName: member.last_name,
    title: member.short_title,
    state:
      [...Object.values(StateKey), ...Object.values(TerritoryKey)].find(
        (value) => value === member.state,
      ) ?? StateKey.Other,
    party:
      Object.values(Party).find((value) => value === member.party) ??
      Party.Other,
    chamber:
      Object.values(Chamber).find((value) => value === member.chamber) ??
      Chamber.Other,
    phone: member.phone,
    websiteURL: member.url,
    facebookURL: `https://facebook.com/${member.facebook_account}`,
    twitterURL: `https://twitter.com/${member.twitter_account}`,
    youtubeURL: `https://youtube.com/${member.youtube_account}`,
    contactURL: member.contact_form,
    sponsor: member.id === sponsorId,
    cosponsor: cosponsorsById[member.id],
  };
}
