import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, confirmed, double } from "vee-validate/dist/rules";

// Add a rule.
extend("required", {
  ...required,
  message: "This field is required",
});

// Add a rule.
extend("email", {
  ...email,
  message: "Email is not valid",
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords do not match",
});

extend("double", {
  ...double,
  message: "Field is not a valid number",
});

extend("number", (value) => {
  let reg = /^-?\d+\.?\d*$/;
  let test = reg.test(value);
  if (test) {
    return true;
  }
  return "Field must be a number";
});


// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
