import { getRepository } from "typeorm";
import { User } from "../models/user.entity";

export default {
  //comment
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
      console.log(uid, name, email, "xx");
      const repository = getRepository(User);
      const user = await repository.save({
        uid,
        email,
        name,
        role: "user"
      });
      console.log(user, "resultxxx");
    },
    register: (_, { email, name, role = "user" }) => {
      const repository = getRepository(User);
      const user = repository.create({
        email,
        name,
        role
      });
      user.save();

      return user;
    }
  }
};
