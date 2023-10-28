import { config, passport  } from '@imtbl/sdk';

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: 'LsoNh5MiQLmwCfb815TlVdbaPu5P1xUi',
  redirectUri: 'http://localhost:3000/load',
  logoutRedirectUri: 'http://localhost:3000/logout',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
});

export default passportInstance;

