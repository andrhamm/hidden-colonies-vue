const config = {
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://colonies-api.andrhamm.com"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xOslG0Sph",
    APP_CLIENT_ID: "7n354hoegd60u3r96ajs86do4p",
    IDENTITY_POOL_ID: "us-east-1:e7192267-c7f3-432e-ac1c-c2abb6d4644d"
  }
};

module.exports = {
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "colonies",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
};
