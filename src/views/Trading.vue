<template>
  <div class="container trading">
    <div class="row">
      <div class="col-4">
        <div class="profile-card">
          <img
            src="../assets/pusheen_hi.jpg"
            style="width: 250px; border-radius: 50%; margin-bottom: 20px"
          />
          <h3 class="full-name">Pusheen The Cat</h3>
          <h6 class="username">@username</h6>
          <h4>50 THB</h4>
          <h4>10 CAMT COINS</h4>
        </div>
      </div>
      <div class="col-8">
        <h2 class="text-available">Available coins for today "amount" coins</h2>
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

  <!--   <h1>Events For Good</h1>

  <div class="events">
    <div class="search-box">
      <BaseInput
        v-model="keyword"
        type="text"
        label="Search..."
        @input="updateKeyword"
      />
    </div>

    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
/* import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js' */

// import axios from 'axios'
export default {
  name: 'Trading'
  /*   props: {
    page: {
      type: Number,
      required: true
    }
  }, */
  /*   components: {
    EventCard // register it as a child component
  }, */
  /*   data() {
    return {
      events: null,
      totalEvents: 0, // <--- Added this to store totalEvents
      keyword: null
    }
  }, */

  // eslint-disable-next-line no-unused-vars
  /*   beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction
    if (this.keyword == null || this.keyword === '') {
      queryFunction = EventService.getEvents(
        3,
        parseInt(routeTo.query.page) || 1
      )
    } else {
      queryFunction = EventService.getEventByKeyword(
        this.keyword,
        3,
        parseInt(routeTo.query.page) || 1
      )
    }

    queryFunction
      .then((response) => {
        this.events = response.data // <-----
        this.totalEvents = response.headers['x-total-count'] // <-----
      })
      .catch(() => {
        return { name: 'NetworkError' }
      }) */
}
/*   methods: {
    updateKeyword() {
      var queryFunction
      if (this.keyword === '') {
        queryFunction = EventService.getEvents(3, 1)
      } else {
        queryFunction = EventService.getEventByKeyword(this.keyword, 3, 1)
      }

      queryFunction
        .then((response) => {
          this.events = response.data
          console.log(this.events)
          this.totalEvents = response.headers['x-total-count']
          console.log(this.totalEvents)
        })
        .catch(() => {
          return { name: 'NetworkError' }
        })
    }
  } 
}*/
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
