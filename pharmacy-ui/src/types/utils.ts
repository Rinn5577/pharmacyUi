export type ApiResponse = {
  code?: string;
  message: string;
  response?: any;
  status?: number;
  show: boolean;
};

export type SearchParams = {
  searchBy: string;
  input?: string;
  name: string;
  idArray: string[];
};

export type UtilsStateArray = {
  currentPage: number;
  pharmacyResponse: ApiResponse;
  searchParams: SearchParams;
};
