<template>
  <div class="container trading">
    <div class="row">
      <div class="col-4">
        <div class="profile-card">
          <img
            src="../assets/user.png"
            style="width: 250px; border-radius: 50%; margin-bottom: 20px"
          />
          <h6 class="username">@{{ user.username }}</h6>
          <h4>{{ user.balance }} THB</h4>
          <h4>{{ user.coin }} CAMT COINS</h4>
        </div>
      </div>
      <div class="col-8">
        <h2 class="text-available">
          Available coins for today {{ GStore.coinPerday }} coins
        </h2>
        <div class="coin-card">
          <div class="row">
            <div class="col-1">
              <img src="../assets/camtcoin.png" style="width: 50px" />
            </div>
            <div class="col-9 coin-name">
              <h5 class="coin-name">CAMT COIN</h5>
            </div>
            <div class="col-2">
              <div class="row">10 THB</div>
              <div class="row">00.00 %</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TradingtService from '../services/TradingService.js'
/* import { watchEffect } from '@vue/runtime-core' */

export default {
  name: 'Trading',
  inject: ['GStore'],
  data() {
    return {
      coins: null,
      user: ''
    }
  },
  created() {
    
      TradingtService.getUser(this.GStore.currentUser.id)
        .then((response) => {
          this.user = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    /* }) */
  }
}
</script>
<style scoped>
.trading {
  flex-direction: column;
  align-items: center;
}

.profile-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #7e4626;
  border-radius: 2%;
}

.profile-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #00000033;
}

.coin-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid orangered;
  margin-top: 20px;
}

.coin-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 #00000033;
}

.full-name {
  font-weight: bold;
  color: #7e4626;
}

.username {
  font-weight: bold;
  color: #b47956;
}

.text-available {
  font-weight: bolder;
  color: #0f0f0f;
}

.coin-name {
  text-align: start;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
