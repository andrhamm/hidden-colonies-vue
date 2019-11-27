<template>
  <div class="auth">
    <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
  </div>
</template>

<script>
import { components } from "aws-amplify-vue";

export default {
  name: "auth",
  data: function() {
    return {
      authConfig: {
        signUpConfig: {
          hideAllDefaults: true,
          defaultCountryCode: "1",
          signUpFields: [
            {
              label: "Username",
              key: "username",
              required: true,
              displayOrder: 1,
              type: "string"
            },
            {
              label: "Email",
              key: "email",
              required: true,
              displayOrder: 2,
              type: "string"
            },
            {
              label: "Password",
              key: "password",
              required: true,
              displayOrder: 3,
              type: "password"
            },
            {
              label: "Name",
              key: "name",
              required: true,
              displayOrder: 4,
              type: "string"
            }
          ]
        }
      }
    };
  },
  components: {
    // ...<yourOtherComponents>,
    ...components
  }
};
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
</style>
