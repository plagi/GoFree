airbnb		= require "./airbnb"
eviterra 	= require "./eviterra"
ostrovok 	= require "./ostrovok"
aviasales	= require "./aviasales"
flatora		= require "./flatora"

exports.hotelProviders 	= [flatora, ostrovok, airbnb]
exports.flightProviders = [eviterra] #, aviasales]

exports.allProviders	= exports.hotelProviders.concat exports.flightProviders
