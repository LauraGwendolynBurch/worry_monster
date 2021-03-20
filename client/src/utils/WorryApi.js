import axios from "axios";

const WorryAPI = {
	getAllWorry: function () {
		return axios.get("/api/posts");
	},
	getMyWorry: function (userid) {
		return axios.get("/api/posts/" + userid );
	},
	createMyWorry: function (body) {
		return axios.post("/api/posts", body);
	},
	updateMyWorry: function (postid) {
		return axios.put("/api/posts/" + postid);
	},
	deleteMyWorry: function (postid) {
		return axios.delete("/api/posts/" + postid);
	},
};


