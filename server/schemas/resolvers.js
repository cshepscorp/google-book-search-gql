const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello world!";
    },
    users: async () => {
      return User.find().select("-__v -password");
      // .populate('friends')
      // .populate('thoughts')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
      // .populate('friends')
      // .populate('thoughts');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
      // const token = signToken(user);
      //return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      return user;
      // const token = signToken(user);
      // return { token, user };
    },
  },
};

module.exports = resolvers;
