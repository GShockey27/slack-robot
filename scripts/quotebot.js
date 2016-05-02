module.exports = function(robot) {

	// an array of quotes
	quotes = ['0','"Tomorrow comes to those who hear it coming" -Bowie', '"One is rich in the number of things he can let alone" -HDT', '"Be yourself, Everyone else is already taken" -Oscar Wide', '"Specialization is for insects" -Heinlein', '"We are such stuff as dreams are made on" -Billy Shakes', '"The things you own, end up owning you" -Tyler Durden', '"My Religion is Kindness" - The Dalai Lama', '"One is free so long as they are unconscious of freedom" -DH Lawrence', '"I get by with a little help from my friends" -The Beatles', '"I would rather be hated for who I am than loved for who I am not" -Kurt Cobain']

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/quote/i, function(response) {
		
		Q = Math.floor((Math.random() * 10) + 1 );
		response.send("I have a quote for you! " + quotes[Q]);
		
	})
