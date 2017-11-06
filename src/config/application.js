/* @flow */

// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

type HeadContent = {
  title: string,
  titleTemplate: string,
  meta: { name: string, content: string }[]
};

type Logger = {
  pretty: boolean,
  level: string
};

type EnvConfig = {
  head: HeadContent,
  logger: Logger,
  httpClient?: Object,
  proxies?: Array<{
    path: string,
    destination: string,
    options?: Object,
    filter?: Function
  }>
};

type Config = {
  development: EnvConfig,
  production: EnvConfig
};

const headContent: HeadContent = {
  title: "My Gluestick App",
  titleTemplate: "%s | Gluestick Application",
  meta: [{ name: "description", content: "Gluestick application" }]
};

const config: Config = {
  development: {
    FACEBOOK_APP_ID: "469991373333039"
    head: headContent,
    proxies: [
      {
        path: "/api/*",
        destination: "http://localhost:3000/"
      }
    ],
    logger: {
      pretty: true,
      level: "info"
    }
  },
  production: {
    FACEBOOK_APP_ID: "465854210413422"
    head: headContent,
    proxies: [
      {
        path: "/api/*",
        destination: "https://intense-retreat-44335.herokuapp.com/",
      }
    ],
    logger: {
      pretty: true,
      level: "info"
    }
  }
};

export default config[
  process.env.NODE_ENV === "production" ? "production" : "development"
];
