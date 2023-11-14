export default {
  async getPartners(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/partners", {});
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
