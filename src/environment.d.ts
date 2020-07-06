type nodeEnv = 'production' | '';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: nodeEnv;
      SESSION_SECRET: string;
      MONGODB_URI: string;
      MONGODB_URI_LOCAL: string;
      PORT: string;
      ACCESS_TOKEN_SECRET: string;
    }
  }
}

export {};
