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
      <router-link
        :to="{ name: 'Trading', params: { id: this.GStore.currentUser.id } }"
        ><font-awesome-icon icon="home" /> Home</router-link
      >
      | <router-link to="/buycoins">Buy</router-link> |
      <router-link to="/sellcoins">Sell</router-link>
    </div>
  </div>

  <!-- new element -->
  <router-view />
</template>
<script>
import AuthService from '@/services/AuthService.js'
import TradingService from '@/services/TradingService.js'
export default {
  inject: ['GStore'],
  data() {
    return {
      list: [],
      timer: ''
    }
  },
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
      this.$router.push('/login')
    },
    fetchEventsList() {
      TradingService.getCoinGenerate()
      .then((response) => {
        this.GStore.coinPerday = response.data
        this.$router.push({
          name: 'Trading',
          params: { id: this.GStore.currentUser.id }
        })
      })
      console.log(this.GStore.coinPerday)
    },
    cancelAutoUpdate() {
      clearInterval(this.timer)
    }
  },
  mounted() {
    if (!this.GStore.currentUser) {
      this.$router.push({ name: 'Login' })
    } else if (this.isUser) {
      this.$router.push({
        name: 'Trading',
        params: { id: this.GStore.currentUser.id }
      })
    }
  },
  created() {
    TradingService.getCoinGenerate()
    .then((response) => {
      this.GStore.coinPerday = response.data
      this.$router.push({
        name: 'Trading',
        params: { id: this.GStore.currentUser.id }
      })
      
    })
    
    this.timer = setInterval(this.fetchEventsList, 86400000)
  },
  beforeUnmount() {
    this.cancelAutoUpdate()
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
