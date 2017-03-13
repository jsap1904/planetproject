var planets = [
	{
		planet: "earth",
		info: "Earth, otherwise known as the world, is the third planet from the Sun and the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets.",
		image: "img/earth.jpg",
	},
	{
		planet: "pluto",
		info: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/pluto.jpg"
	},
	{
		planet: "mars",
		info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury.",
		image: "img/mars.jpg"
	},
	{
		planet: "jupiter",
		info: "Communication, Indecision, Inquisitive, Intelligent, ChangeableJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined",
		image: "img/jupiter.jpg"
	},
	{
		planet: "neptune",
		info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet",
		image: "img/neptune.jpg"
	},
	{
		planet: "uranus",
		info: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
		image: "img/uranus.jpg"
	},
	{
		planet: "venus",
		info: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellite.",
		image: "img/venus.jpg"
	},
	{
		planet: "mercury",
		info: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods. ",
		image: "img/mercury.jpg"
	},
	{
		planet: "saturn",
		info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
		image: "img/saturn.jpg"
	}
]
//function to determine user planet, function fires on user clicking button
function solarSystem() {
	//store the tag with id="planet" in var userdata
	var userdata = document.getElementById("userdata")
	//confirm the element exists and what value the user submits
	console.log(userdata)
	console.log("users value is: " + userdata.value)

	//loop through planet array one at a time
	for(i = 0;i < planets.length; i = i + 1) {
		//check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		//check the current item's planet in the planet array
		console.log("current planet in loop is: " + planets[i].planet)

		//if the value the user type in, changed to all lowercase letters, is equal to one of our planets, then we do somthing
		if(userdata.value.toLowerCase() === planets[i].planet) {
			//confirm the if statement ran
			console.log("if statement ran")
			//check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + planets[i].image)
			console.log("current info value is: " + planets[i].info)

			// get element with id="userPlanet" and change the text to the user input
			document.getElementById("yourPlanet").textContent = userdata.value
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = planets[i].image
			// // get element with id="yourInfo" and change the content to this concatenated string
			document.getElementById("yourInfo").textContent = "about " + planets[i].planet + " : " +  planets[i].info
			
			// stop the function because we found a match and added the data to the screen!!!
			return
		}
		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct planet")
		// if no match is found, do opposite of above, mostly clearing content and images
		
		//get element with id="userPlanet" and change text to the user input
		document.getElementById("yourPlanet").textContent = "No such planet! ...yet?"
		document.getElementById("yourInfo").textContent = ""
		document.getElementById("icon").src = ""
	}
}
	
	
