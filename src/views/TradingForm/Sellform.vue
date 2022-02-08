<template>
  <div>
    <h1 class="title-sell">SELL COINS</h1>
    <form @submit.prevent="saveSell">
      <br />
      <div class="row">
        <label>Input amount coins</label>
      </div>

      <div class="row">
        <BaseInput v-model="coin.coin" type="text" label="Amount coins" />
        <div class="text">Coins</div>
      </div>
      <div class="row">
        <label>Input price for each coin</label>
      </div>
      <div class="row">
        <BaseInput v-model="coin.price" type="text" label="Price" />
        <div class="text">/ THB</div>
      </div>
      <br />
      <button class="btn_name" type="submit">Confirm</button>
      <button type="button">Cancel</button>
    </form>
  </div>
</template>
<script>
import TradingtService from '@/services/TradingService.js'

// import UploadImages from 'vue-upload-drop-images'
export default {
  inject: ['GStore'],
  components: {
    // UploadImages
  },
  props: ['id'],
  data() {
    return {
      coin: {
        coin: '',
        price: ''
      }
    }
  },
  methods: {
    saveSell() {
      if (this.coin.coin === '' || this.coin.price === '' || this.coin.coin === '0' || this.coin.price === '0') {
        this.GStore.flashMessage = 'Please input amount coins'
        setTimeout(() => {
          this.GStore.flashMessage = ''
        }, 3000)
      }
      else if(this.coin.coin < 5 ){
        this.GStore.flashMessage = 'Your coin is too low. The minimum coin for the transaction is 5 coin'
        setTimeout(() => {
          this.GStore.flashMessage = ''
        }, 3000)
      }
      else {
        TradingtService.sellCoin(this.GStore.currentUser.id, this.coin)
          .then((response) => {
            console.log(response.data)
              if (response.data == false) {
              this.GStore.flashMessage = 'Transection fail'
              setTimeout(() => {
                this.GStore.flashMessage = ''
              }, 3000)
            } else{
            this.$router.push({
              name: 'Trading',
              params: { id: this.GStore.currentUser.id}
            })
            this.GStore.flashMessage =
              'You are successfully sell ' + this.coin.coin + ' coins'
            setTimeout(() => {
              this.GStore.flashMessage = ''
            }, 3000)
          }})
          .catch(() => {
            this.$router.push('NetworkError')
          })
      }
    }
  }
}
</script>
<style>
.title-sell {
  font-weight: bold;
  color: #cc1f1f;
}
.btn_name {
  margin-right: 10px;
}

b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.eyebrow {
  font-size: 20px;
}
.-text-primary {
  color: #39b982;
}
.-text-base {
  color: #000;
}
.-text-error {
  color: tomato;
}
.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 2px solid #39b982;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
  margin-right: 0.5rem;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
input,
[type='text'],
[type='number'],
[type='search'],
[type='password'] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}
input,
[type='text']:focus,
[type='number']:focus,
[type='search']:focus,
[type='password']:focus {
  border-color: #39b982;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
.error {
  border: 1px solid red;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
.field {
  margin-bottom: 24px;
}
.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
}
.button.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
</style>
