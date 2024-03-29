import axios from 'axios';
const BASE_URL = 'https://ss-rsvp-api.onrender.com/';

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

