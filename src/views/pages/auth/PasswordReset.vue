<template>
  <ValidationObserver v-slot="{ invalid }" ref="observer">
    <v-card>
      <auth-card-title>Reset Password</auth-card-title>
      <v-card-text>
        <ValidationProvider
          name="password"
          rules="required"
          v-slot="{ errors }"
        >
          <v-text-field
            name="password"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            v-model="user.password"
            :error-messages="errors"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          name="password_confirmation"
          vid="password_confirmation"
          rules="required|confirmed:password"
          v-slot="{ errors }"
        >
          <v-text-field
            name="password_confirmation"
            label="Confirm Password"
            prepend-inner-icon="mdi-lock-outline"
            v-model="user.password_confirmation"
            :error-messages="errors"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :loading="loading"
          color="primary"
          class="px-5"
          :disabled="invalid"
          :dark="!invalid"
          @click="reset()"
        >
          Reset Password
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text :to="{ name: 'login' }" plain>
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import AuthCardTitle from "@/components/AuthCardTitle.vue";

export default {
  data() {
    return {
      showPassword: false,
      loading: false,
      user: {
        password: "",
        password_confirmation: "",
      },
    };
  },
  components: {
    AuthCardTitle,
  },
  methods: {
    async reset() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/resetPassword", {
          ...this.user,
          token: this.$route.params.token,
        });
        this.$router.push({ name: "login" });
      } catch (error) {
        this.$toasted.show(error.data.error);
        return;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.card-title {
  background-color: $primary;
  border-bottom: 5px solid $secondary !important;
}
</style>
