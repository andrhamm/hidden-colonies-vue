<template>
  <div id="app">
    <div class="nav">
      <router-link tag="p" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="p" to="/profile">
        <a>Profile</a>
      </router-link>
      <router-link tag="p" to="/games">
        <a>Games</a>
      </router-link>
      <router-link tag="p" to="/auth" v-if="!signedIn">
        <a>Sign Up / Sign In</a>
      </router-link>
    </div>
    <router-view></router-view>
    <div class="sign-out" v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";

export default {
  name: "app",
  data() {
    return {
      signedIn: false
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.signedIn = true;
        this.$router.push("/profile");
      }
      if (info === "signedOut") {
        this.$router.push("/auth");
        this.signedIn = false;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true;
      })
      .catch(() => (this.signedIn = false));
  }
};
</script>

<style>
.nav {
  display: flex;
}
.nav p {
  padding: 0px 30px 0px 0px;
  font-size: 18px;
  color: #000;
}
.nav p:hover {
  opacity: 0.7;
}
.nav p a {
  text-decoration: none;
}
.sign-out {
  width: 160px;
  margin: 0 auto;
}
</style>
