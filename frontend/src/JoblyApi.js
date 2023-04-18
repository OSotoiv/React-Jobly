import axios from "axios";
const BASE_API_URL = "http://localhost:3001";

/**
 * this is a class for a User 
 * makes api calls to register and login
 * 
 */
class JoblyApi {
    constructor({ token }) {
        this.BASE_API_URL = "http://localhost:3001";
        this.token = token;
    }
    static async register(formdata) {
        const { data } = await axios.post(`${BASE_API_URL}/auth/register`, formdata);
        return data.token;
    }
    static async login(formdata) {
        const { data } = await axios.post(`${BASE_API_URL}/auth/token`, formdata);
        return data.token;
    }
    static async getJobs() {
        const { data } = await axios.get(`${BASE_API_URL}/jobs`)
        return data.jobs;
    }
    static async getCompanies() {
        const { data } = await axios.get(`${BASE_API_URL}/companies`)
        return data.companies;
    }
}

export default JoblyApi;