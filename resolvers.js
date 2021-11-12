const resolvers = {
  Query: {
    // peopleByID: (_,__,{dataSources}) => {
    //   return dataSources.trackAPI.getPeopleByID;
    // },
    CatBreeds: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getCatBreeds();
    },
    CatByName: (_, { catName }, { dataSources }) => {
      return dataSources.trackAPI.getCatByName(catName);
    },
  },
  Cat: {
    image: async ({ reference_image_id }, _, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.getImageByRefId(
          reference_image_id
        );

        return {
          code: 200,
          success: true,
          message: 'got the image',
          ...track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          message: "can't get the image",
          success: false,
          track: null,
        };
      }
    },
  },
};

module.exports = resolvers;
