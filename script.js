//i have no clue what im doing- here is what came with the api
fetch("https://animals-endangered-environmentalism.p.rapidapi.com/population/1?type=equal", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "animals-endangered-environmentalism.p.rapidapi.com",
		"x-rapidapi-key": "99d0c7bde9mshf7816286f1336b3p1d9589jsn867e21e8c41e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// oh! thank you! someone who knows what they are doing!