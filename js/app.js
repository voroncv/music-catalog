let app = new Vue({
  el: '#app',
  data: {
  	musicians: [{
  		"name": "Edward Sheeran",
  		"age": "27",
  		"genre": "pop",
  		"careerStartYear": "2006",
  		"albums": [{
  			"name": "Plus",
  			"releaseYear": "2011",
  			"tracks": [{
  				name: "The A Team",
  				duration: "04:18",
  				isFavorite: false,
  				isListened: false,
  				rating: 0,
  				isLiked: false
  			}, {
  				name: "Drunk",
				duration: "03:20",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "U.N.I.",
				duration: "03:48",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Grade 8",
				duration: "02:59",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}]
		}, {
			"name": "Multiply",
			"releaseYear": "2014",
			"tracks": [{
				name: "One",
				duration: "04:13",
				isFavorite: "false",
				isListened: "false",
				rating: 0,
				isLiked: false
			}, {
				name: "I'm a Mess",
				duration: "04:06",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Nina",
				duration: "03:43",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Photograph",
				duration: "04:17",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}]
		}, {
			"name": "Divide",
			"releaseYear": "2017",
			"tracks": [{
				name: "Erazer",
				duration: "03:47",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Castle on the Hill",
				duration: "04:21",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Dive",
				duration: "03:58",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}, {
				name: "Shape of You",
				duration: "03:53",
				isFavorite: false,
				isListened: false,
				rating: 0,
				isLiked: false
			}]
		}]
	}]
  },
  methods: {
  	setLike (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isLiked = true;
  	},
  	setDislike (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isLiked = false;
  	},
  	setListener (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isListened = true;
  	},
  	setDislistener (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isListened = false;
  	},
  	setFavorite (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isFavorite = true;
  	},
  	setDisfavorite (musicianIndex, albumIndex, tracksIndex) {
  		this.musicians[musicianIndex].albums[albumIndex].tracks[tracksIndex].isFavorite = false;
  	},
  	getMusicansFromServer () {
  		this.$http.get(`URL_HERE`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            }
        }).then(response => {
        	this.musicians = response.body;
        }, response => {
        	console.log('E', response);
        });
  	}
  },
  created() {
  	//this.getMusicansFromServer();
  }
});