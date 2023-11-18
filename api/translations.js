export default {
  async getTranslations(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/translations", {
          ...params,
        });

        return res;
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
