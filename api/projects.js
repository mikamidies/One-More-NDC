export default {
  async getProjects(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/projects", {
          ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
