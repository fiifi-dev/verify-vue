export default {
  data() {
    return {
      loading: false,
      user: null,
    };
  },
  methods: {
    async getUser() {
      try {
        this.loading = true;
        let user = await this.$store.dispatch("auth/getUser");
        this.user = user.attributes;
      } catch (error) {
        this.$toasted.show(error.data.error);
        return;
      } finally {
        this.loading = false;
      }
    },
  },

  async created() {
    await this.getUser();
  },
};
