export default {
  async getInfo(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/static_infos", {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
