<template>
  <ValidationObserver v-slot="{ invalid }" ref="observer">
    <v-card>
      <auth-card-title>Password Reset Email</auth-card-title>
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
      </v-card-text>

      <v-card-actions>
        <v-btn
          :loading="loading"
          color="primary"
          class="px-5"
          :disabled="invalid"
          :dark="!invalid"
          @click="sendEmail()"
        >
          Send Email
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
        email: "",
      },
    };
  },
  components: {
    AuthCardTitle,
  },
  methods: {
    async sendEmail() {
      try {
        this.loading = true;
        await this.$store.dispatch("auth/resetPasswordEmail", this.user);
        this.$toasted.show(`Reset Email sent to ${this.user.email}`, {
          type: "success",
        });
      } catch (error) {
        console.log(error)
        this.$toasted.show(error.data.error);
        return;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
