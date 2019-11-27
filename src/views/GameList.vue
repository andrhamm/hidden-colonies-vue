<template>
  <div>
    <h1>Games Listing</h1>
    <ul>
      <li v-for="game in games" :key="game.id">
        <router-link :to="{ name: 'game', params: { id: game.id } }">
          {{ game.id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: []
    };
  },

  created() {
    this.$Amplify.API.get("colonies", "/games")
      .then(games => {
        this.games = games;
      })
      .catch(err => console.log(err));
  }
};
</script>
