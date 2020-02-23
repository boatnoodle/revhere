import { getRepository } from "typeorm";
import { User } from "../models/user.entity";

export default {
  Query: {
    hello: (root, arg) => {
      return "hello from production!";
    },
    users: async () => {
      const repository = getRepository(User);
      const users = await repository.find({});

      return users;
    },
    user: async (_, { id }) => {
      const repository = getRepository(User);
      const user = await repository.findOne({ id });
      return user;
    }
  },
  Mutation: {
    createOrUpdateUser: async (_, __, context: any) => {
      const { uid, name, email } = await context?.user;
      const repository = getRepository(User);
      let user = await repository.findOne({ uid });

      user = await repository.save({
        id: user?.id,
        email,
        name,
        uid
      });

      return user;
    }
  }
};
