// @ts-nocheck
import axios from "axios";
import { user, latestClub } from "../stores.js";

export const placemarkService = {
    // baseUrl: "http://localhost:4000",
       baseUrl: "https://placemark-sportground.onrender.com",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.placemark = JSON.stringify({ email: email, token: response.data.token });
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },


    async logout() {
        user.set({
          email: "",
          token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark");
      },

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },
    reload() {
        const placemarkCredentials = localStorage.placemark;
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },
    async getAllClubs() {
        try {
            const response = await axios.get(this.baseUrl + "/api/clubs");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getAllSportgrounds() {
        try {
            const response = await axios.get(this.baseUrl + "/api/sportgrounds");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async addClub(club) {
        try {
            const response = await axios.post(this.baseUrl + "/api/sportgrounds/" + club.sportground + "/clubs", club);
            latestClub.set(club);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    async addSportground(sportground) {
       try {
           const response = await axios.post(this.baseUrl + "/api/sportgrounds/" + sportground.addSportground + "/sportgrounds", sportground);
           return response.status == 200;
       } catch (error) {
           return false;
        }
   },


    async getClub(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/clubs/" + id);
            return response.data;
        } catch (error) {
            return [];
        }
    },


};