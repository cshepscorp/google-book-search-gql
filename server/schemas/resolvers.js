const { User } = require("../models");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello world!";
    },
    users: async () => {
      return User.find()
      .select('-__v -password')
        // .populate('friends')
        // .populate('thoughts')
        ;
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        // .populate('friends')
        // .populate('thoughts');
    },
  },
};

module.exports = resolvers;
