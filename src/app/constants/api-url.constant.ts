import { environment } from '../environments/environment';

const API = environment.apiUrl;

export const ApiConstants = {
  GET_TARIFF_PLANS: `${API}/assets/mock-data/tariff-plans.json`,
};