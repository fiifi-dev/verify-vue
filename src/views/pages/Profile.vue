<template>
  <v-row>
    <v-col sm="8" md="6">
      <v-card :loading="loading">
        <v-card-text v-if="user && user.name">
          <h2 class="my-5">
            {{ user.name }}
          </h2>
          <v-divider></v-divider>
          <p class="overline">First Name: {{ user.first_name }}</p>
          <p class="overline">Last Name: {{ user.last_name }}</p>
          <p class="overline">Email: {{ user.email }}</p>
          <p class="overline">Phone Number: {{ user.phone_number }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import auth from "/src/mixins/auth.js";
export default {
  name: "Profile",
  mixins: [auth],
  async created() {
    await this.getUser();
  },
};
</script>
