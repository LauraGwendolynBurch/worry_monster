import axios from "axios";
let config = {
	headers: {
		Authorization: `${localStorage.getItem("jwtToken")}`,
	},
};
const WorryAPI = {
	// getting all post from every user
	getAllWorry: function () {
		return axios.get("/api/posts/all", config);
	},
	// getting all my worry
	getMyWorry: function (userid) {
		console.log(config);
		return axios.get("/api/posts", config);
	},
	// req.body => body
	createMyWorry: function (body) {
		return axios.post("/api/posts", body, config);
	},

	updateMyWorry: function (postid) {
		return axios.put("/api/posts/" + postid, config);
	},
	deleteMyWorry: function (postid) {
		return axios.delete("/api/posts/" + postid, config);
	},
};

export default WorryAPI;
