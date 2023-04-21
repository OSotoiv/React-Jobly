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
    static async getJob(id) {
        const { data } = await axios.get(`${BASE_API_URL}/jobs/${id}`)
        return data.job;
    }
    static async getCompanies() {
        const { data } = await axios.get(`${BASE_API_URL}/companies`)
        return data.companies;
    }
    static async getCompany(handle) {
        const { data } = await axios.get(`${BASE_API_URL}/companies/${handle}`)
        return data.company;
    }
    static async apply(username, jobId, JWT) {
        const { data } = await axios.post(`${BASE_API_URL}/users/${username}/jobs/${jobId}`, {}, {
            headers: {
                Authorization: `Bearer ${JWT}`
            }
        })
        return data.applied;
    }
    static async getUser(username, JWT) {
        const { data } = await axios.get(`${BASE_API_URL}/users/${username}`, {
            headers: {
                Authorization: `Bearer ${JWT}`
            }
        })
        return data.user;
    }
    static async updateApplicationStatus(applicant, JWT, jobId, jobStatus) {
        const { data } = await axios.patch(`${BASE_API_URL}/users/${applicant}/application`, { jobId, jobStatus }, {
            headers: {
                Authorization: `Bearer ${JWT}`
            }
        })
        return data;
    }
}
export default JoblyApi;