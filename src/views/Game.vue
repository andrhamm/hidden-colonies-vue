<template>
  <div>
    <h1>Games {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      game: {}
    };
  },

  created() {
    this.$Amplify.API.get("colonies", `/games/{{id}}`)
      .then(game => {
        this.game = game;
      })
      .catch(err => console.log(err));
  }
};
</script>
