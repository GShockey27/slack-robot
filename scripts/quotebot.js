module.exports = function(robot) {

	// an array of my favorite quotes
	var quotes = ['"01010" -Hubot','"Tomorrow comes to those who hear it coming" -Bowie', '"One is rich in the number of things he can let alone" -HDT', '"Be yourself, Everyone else is already taken" -Oscar Wide', '"Specialization is for insects" -Heinlein', '"We are such stuff as dreams are made on" -Billy Shakes', '"The things you own, end up owning you" -Tyler Durden', '"My Religion is Kindness" - The Dalai Lama', '"One is free so long as they are unconscious of freedom" -DH Lawrence', '"I get by with a little help from my friends" -The Beatles', '"I would rather be hated for who I am than loved for who I am not" -Kurt Cobain']
	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/quote/i, function(response) {
		response.send("I have a quote for you! " + quotes[Math.floor((Math.random() * 10) + 1 )]);
	})
		

	robot.respond(/play the (.*) album/i, function(response) {
    albumType = res.match[1]
    if albumType is "disco"
      res.reply "I'm afraid I can't do that."
    else
      res.reply "Now playing the #{albumType} I like your taste in music"
  	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.hear(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.send('Call on ' + user.real_name + '!')
	})
	
}