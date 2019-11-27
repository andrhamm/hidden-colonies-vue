import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";
import GameList from "./views/GameList.vue";
import Auth from "./components/Auth";
import Profile from "./components/Profile";

Vue.use(Router);

const routes = [
  { path: "/auth", component: Auth },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/games",
    name: "games",
    component: GameList,
    meta: { requiresAuth: true }
  },
  {
    path: "/games/:id",
    name: "game",
    component: Game,
    meta: { requiresAuth: true },
    props: true
  },
  {
    path: "/profile",
    component: Profile,
    meta: { requiresAuth: true }
  }
];

const router = new Router({
  mode: "history",
  routes
});

// TODO: see https://github.com/dabit3/aws-amplify-vue-sample/blob/master/src/amplify/AuthRouter.js
router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then(data => {
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch(e => {
        next({
          path: "/auth"
        });
      });
  }
  next();
});

export default router;
