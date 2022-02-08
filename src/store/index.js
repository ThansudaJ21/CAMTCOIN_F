import { reactive } from 'vue'
export default reactive({ flashMessage: '', event: null, organizers: null, profile: null, currentUser: JSON.parse(localStorage.getItem('user')) , coinPerday:0})