import { getConnectionOptions, createConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL
    } as any);
  } else {
    createConnection({ ...connectionOptions, name: "default" });
  }
};
