import { getConnectionOptions, createConnection } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    console.log(process.env.DATABASE_URL, "database url");
    createConnection({
      ...connectionOptions,
      url: process.env.DATABASE_URL,
      name: "default"
    } as any);
  } else {
    createConnection({ ...connectionOptions, name: "default" });
  }
};
