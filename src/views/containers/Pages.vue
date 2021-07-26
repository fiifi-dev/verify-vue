<template>
  <v-main class="grey lighten-4">
    <v-navigation-drawer
      color="primary"
      app
      :mini-variant="drawer"
      permanent
      mini-variant-width="70"
    >
      <v-list-item
        class="secondary"
        :class="{
          'pb-2': drawer && !$vuetify.breakpoint.mobile,
          'pb-1': !drawer && !$vuetify.breakpoint.mobile,
          'py-0': $vuetify.breakpoint.mobile,
        }"
      >
        <template v-slot:default>
          <v-list-item-content>
            <v-list-item-title>
              <span
                :class="{
                  'font-weight-bold': drawer,
                  'text-h5': drawer,
                  'pb-3': drawer,
                }"
              >
                {{ getName }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle
              class="caption"
              v-if="user && user.email && !drawer"
            >
              {{ user.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-list dense nav dark>
        <v-list-item
          v-for="item in navs"
          :key="item.title"
          link
          exact
          :to="{ name: item.name }"
          exact-active-class="custom-active"
          class="custom-hover rounded-0"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="overline">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> Admin Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y transition="slide-y-transition" nudge-top="5">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            small
            class="secondary black--text elevation-0"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-icon small>mdi-chevron-down</v-icon>
        </template>
        <v-list>
          <v-list-item link :to="{ name: 'settings' }">
            <v-list-item-title class="overline"> Settings </v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'profile' }">
            <v-list-item-title class="overline"> Profile </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="error black--text"
                small
                block
                @click="logout"
                :loading="loading"
              >
                <v-icon>mdi-logout-variant</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container class="py-5">
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Pages",
  data() {
    return {
      loading: false,
      user: null,
      drawer: null,
      navs: [
        { title: "Home", icon: "mdi-home", name: "home" },
        { title: "Dashboard", icon: "mdi-view-dashboard", name: "dashboard" },
        { title: "Photos", icon: "mdi-image", name: "photos" },
        { title: "About", icon: "mdi-help-box", name: "about" },
      ],
    };
  },
  async created() {
    await this.getUser();
  },
  computed: {
    getName() {
      if (this.user && this.user.name) {
        if (!this.drawer) {
          return this.user.name;
        } else {
          let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

          let initials = [...this.user.name.matchAll(rgx)] || [];

          initials = (
            (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
          ).toUpperCase();
          return initials;
        }
      }
      return "";
    },
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
    async logout() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/logout");
      } catch (error) {
        this.$toasted.show(error.data.error);
        return;
      } finally {
        this.$router.push({ name: "login" });
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/variables.scss";

.custom-active {
  border-left: 3px solid $secondary !important;
  transition: all 0.2s ease;
}

.custom-hover {
  transition: all 0.2s ease;

  &:hover {
    border-left: 3px solid $secondary !important;
  }
}
</style>
