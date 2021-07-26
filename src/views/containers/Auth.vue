<template>
  <v-main class="grey lighten-4">
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col sm="8" lg="5" md="6">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Auth",
};
</script>
