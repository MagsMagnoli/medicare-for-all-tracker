export interface MembersResponse {
  status: string;
  copyright: string;
  results: MemberResults[];
}

export interface MemberResults {
  congress: string;
  chamber: string;
  num_results: number;
  offset: number;
  members: Member[];
}

export interface Member {
  id: string;
  title: string;
  short_title: string;
  api_uri: string;
  first_name: string;
  middle_name?: any;
  last_name: string;
  suffix?: any;
  date_of_birth: string;
  gender: string;
  party: string;
  leadership_role?: any;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  govtrack_id: string;
  cspan_id: string;
  votesmart_id: string;
  icpsr_id: string;
  crp_id: string;
  google_entity_id: string;
  fec_candidate_id: string;
  url: string;
  rss_url: string;
  contact_form: string;
  in_office: boolean;
  cook_pvi?: any;
  dw_nominate: number;
  ideal_point?: any;
  seniority: string;
  next_election: string;
  total_votes: number;
  missed_votes: number;
  total_present: number;
  last_updated: string;
  ocd_id: string;
  office: string;
  phone: string;
  fax: string;
  state: string;
  senate_class: string;
  state_rank: string;
  lis_id: string;
  missed_votes_pct: number;
  votes_with_party_pct: number;
  votes_against_party_pct: number;
  chamber: string;
}
