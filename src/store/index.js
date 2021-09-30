import { reactive } from 'vue'
export default reactive({ flashMessage: '', event: null, organizers: null,currentUser: JSON.parse(localStorage.getItem('user')) })
