export default {
  async sendApplication(formData) {
    try {
      const res = await $nuxt.$axios.post("/application/create", formData);
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getTypes(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/application/types", {
          ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
