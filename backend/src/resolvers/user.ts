import { ObjectId } from "bson";
import User from "../models/User";

export default {
  Query: {
    hello: (root, arg) => {
      return "hello from production!";
    },
    me: async (_, __, context) => {
      const { uid } = await context?.user;
      return await User.find({ uid });
    },
    users: async () => {
      return [];
    },
    user: async (_, { id }) => {
      return await User.find({ _id: new ObjectId(id) });
    }
  },
  Mutation: {
    register: async (_, { uid, email, name, role = "user" }) => {
      const user = new User({ uid, email, name, role });
      await user.save();

      return user;
    },
    createOrUpdateUser: async (_, __, context: any) => {
      const { uid, name, email } = await context?.user;

      const user = await User.findOneAndUpdate(
        { uid },
        { $set: { uid, name, email, role: "user" } },
        {
          upsert: true,
          new: true
        }
      );

      return user;
    }
  }
};
