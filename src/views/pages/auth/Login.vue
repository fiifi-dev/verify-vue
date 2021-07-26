<template>
  <ValidationObserver v-slot="{ invalid }" ref="observer">
    <v-card>
      <auth-card-title>Login</auth-card-title>
      <v-card-text>
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <v-text-field
            name="email"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            v-model="user.email"
            :error-messages="errors"
            type="email"
            required
          ></v-text-field>
        </ValidationProvider>

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
      </v-card-text>

      <v-card-actions>
        <v-btn
          :loading="loading"
          color="primary"
          rounded
          class="px-5"
          :disabled="invalid"
          :dark="!invalid"
          @click="login"
        >
          Login
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          small
          :to="{ name: 'password-reset-email' }"
          plain
        >
          Forgetten password?
        </v-btn>
      </v-card-actions>
      <v-card-actions class="overline">
        <v-spacer></v-spacer>
        Haven't registered?
        <v-btn color="secondary" text small :to="{ name: 'signup' }" plain>
          Sign up
        </v-btn>
        <v-spacer></v-spacer>
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
        email: "",
        password: "",
      },
    };
  },
  components: {
    AuthCardTitle,
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/login", this.user);
        if (this.$route.query.next) {
          this.$router.push(this.$route.query.next);
        } else {
          this.$router.push({ name: "home" });
        }
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
