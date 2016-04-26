export const AUTH0 = {
  domain: 'DOMAIN',
  id: 'ID',
};

export const LOCK = new Auth0Lock(AUTH0.id, AUTH0.domain);
