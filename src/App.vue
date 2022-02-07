<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <div id="nav">
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" style="color: orange">
            <img src="../src/assets/camtcoin.png" style="width: 40px" /> CAMT
            COINS
          </router-link>
        </li>
      </ul>
      <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/registers" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </ul>
      <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click="logout">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </ul>
    </nav>

    <div v-if="GStore.currentUser">
      <router-link :to="{ name: 'Trading' }"
        ><font-awesome-icon icon="home" /> Home</router-link
      >
      | <router-link :to="{ name: 'Buycoins' }">Buy</router-link> |
      <router-link :to="{ name: 'Sellcoins' }">Sell</router-link>
    </div>
  </div>

  <!-- new element -->
  <router-view />
</template>
<script>
import AuthService from '@/services/AuthService.js'

export default {
  inject: ['GStore'],
  computed: {
    currentUser() {
      return localStorage.AuthService('user')
    },
    isUser() {
      return AuthService.hasRoles('ROLE_USER')
    }
  },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go()
    }
  },
  mounted() {
    if (!this.GStore.currentUser) {
      this.$router.push('/login')
    } else if (this.isUser) {
      this.$router.push({
        name: 'Trading',
        params: { id: this.GStore.currentUser.id }
      })
    }
  }
}
</script>
<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #af6237;
}
</style>
