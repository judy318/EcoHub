      function hello(){

        fetch("https://api.ambeedata.com/latest/by-lat-lng?lat=12.9889055&lng=77.574044", {
            "method": "GET",
            "headers": {
                "x-api-key": "46cc4cdc58511ee604341e35b3dc3b08481ef548ae900753789cea2c06d61049",
                "Content-type": "application/json"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
      }