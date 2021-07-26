<template>
  <ValidationObserver v-slot="{ invalid }" ref="observer">
    <v-card>
      <auth-card-title>Sign up</auth-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <ValidationProvider
              name="first_name"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                name="first_name"
                label="First Name"
                v-model="user.first_name"
                :error-messages="errors"
                required
              ></v-text-field>
            </ValidationProvider>
          </v-col>
          <v-col>
            <ValidationProvider
              name="last_name"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                name="last_name"
                label="Last Name"
                v-model="user.last_name"
                :error-messages="errors"
                required
              ></v-text-field>
            </ValidationProvider>
          </v-col>
        </v-row>

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
        <v-row>
          <v-col>
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
          </v-col>
          <v-col>
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
          </v-col>
        </v-row>

        <ValidationProvider
          name="market_id"
          rules="required"
          v-slot="{ errors }"
        >
          <v-text-field
            name="market_id"
            label="Market ID"
            v-model="user.market_id"
            :error-messages="errors"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          name="terms_and_policy"
          rules="required"
          v-slot="{ errors }"
        >
          <v-checkbox
            label="I accept the terms and policies"
            name="terms_and_policy"
            dense
            v-model="user.terms_and_policy"
            :error-messages="errors"
            required
          ></v-checkbox>
        </ValidationProvider>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :loading="loading"
          color="primary"
          class="px-5"
          rounded
          :disabled="invalid"
          :dark="!invalid"
          @click="signup"
        >
          Sign up
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
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        market_id: "",
        terms_and_policy: false,
      },
    };
  },
  components: {
    AuthCardTitle,
  },
  methods: {
    async signup() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/signup", this.user);
        this.$toasted.show("A confirmation email has been sent", {
          type: "success",
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
