const dev = {
  // API_ENDPOINT_URL: 'https://abhishek.loca.lt',
  API_ENDPOINT_URL: "http://localhost:8000",
};

const stag = {
  API_ENDPOINT_URL: "development_url",
};

const prod = {
  API_ENDPOINT_URL: "prod_url",
};

const getEnv = () => {
  switch (process.env.REACT_APP_ENV) {
    case "dev":
      return dev;
    case "prod":
      return prod;
    case "stag":
      return stag;
    default:
      return dev;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const env = getEnv();
