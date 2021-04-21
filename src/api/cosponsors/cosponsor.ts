export interface Party {
  id: string;
  sponsors: string;
}

export interface CosponsorsByParty {
  party: Party;
}

export interface Cosponsor {
  cosponsor_id: string;
  name: string;
  cosponsor_title: string;
  cosponsor_state: string;
  cosponsor_party: string;
  cosponsor_uri: string;
  date: string;
}

export interface Bill {
  congress: string;
  bill_id: string;
  bill_slug: string;
  bill_type: string;
  number: string;
  bill_uri: string;
  url_number: string;
  title: string;
  sponsor_title: string;
  sponsor_id: string;
  sponsor_name: string;
  sponsor_state: string;
  sponsor_party: string;
  sponsor_uri: string;
  introduced_date: string;
  number_of_cosponsors: number;
  committees: string;
  latest_major_action_date: string;
  latest_major_action: string;
  house_passage_vote?: any;
  senate_passage_vote?: any;
  cosponsors_by_party: CosponsorsByParty[];
  cosponsors: Cosponsor[];
}

export interface BillsResponse {
  status: string;
  copyright: string;
  num_results: number;
  offset: number;
  results: Bill[];
}
