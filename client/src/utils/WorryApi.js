import axios from "axios";
import API from "./API";

let config = {
	headers: {
		Authorization: `${localStorage.getItem("jwtToken")}`,
	},
};
const WorryAPI = {
	// getting all post from every user
	getAllWorry: function () {
		return API.axios.get("/api/posts/all", config);
	},
	// getting all my worry
	getMyWorry: function (userid) {
		console.log(config);
		return API.axios.get("/api/posts", config);
	},
	// req.body => body
	createMyWorry: function (body) {
		return API.axios.post("/api/posts", body, config);
	},

	updateMyWorry: function (postid) {
		return API.axios.put("/api/posts/" + postid, config);
	},
	deleteMyWorry: function (postid) {
		return API.axios.delete("/api/posts/" + postid, config);
	},
};

export default WorryAPI;
