export interface Jedi {
  id: string;
  name: string;
  url: string;
}

export interface JediError {
  detail: string;
}

export interface JediResponse {
  status: number;
  data: Jedi | null;
  error: JediError | null;
}

export interface JedisResponse {
  count: number;
  results: Jedi[];
}
