import { environment } from '../../environments/environment';

export const url = `${environment.urls.dashboard}/api`; // optional versioning
export const API_URLS = {
  Auth: {
    login: url + '/auth/login',
  },
  Dashboard: {
    getDashboard: url + '/dashboard', // points to your Spring Boot endpoint
  },
  Startups: {
    getStartups: url + '/startups',
  },
};
