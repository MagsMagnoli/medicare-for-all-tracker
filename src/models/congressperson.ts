import { StateKey, TerritoryKey } from './state';

export enum Party {
  Republican = 'R',
  Democrat = 'D',
  Independent = 'I',
  Other = 'Other',
}

export enum Chamber {
  Senate = 'Senate',
  House = 'House',
  Other = 'Other',
}

export type CongressPerson = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  party: Party;
  state: StateKey | TerritoryKey;
  chamber: Chamber;
  facebookURL: string | undefined;
  twitterURL: string | undefined;
  youtubeURL: string | undefined;
  websiteURL: string | undefined;
  contactURL: string | undefined;
  phone: string | undefined;
  sponsor: boolean;
  cosponsor: boolean;
};
