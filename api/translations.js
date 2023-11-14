export default {
  async getTranslations(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/translations", {
          //   ...params,
        });
        console.log(res);

        return res;
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
