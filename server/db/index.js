var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DidYouKnow', {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
var faker = require('faker')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('CONNECTED :D')
    var didYouKnowSchema = new mongoose.Schema({
        MovieName: String,
        MovieID: Number,
        Trivia: String,
        Goofs: String,
        Quotes: String,
        AlternateVersions: String,
        Connections: String,
        Soundtrack: String
    })

    var Movie = mongoose.model('Movie', didYouKnowSchema);
    for (var i = 0; i < 100; i++) {
        var newMovie = new Movie({ 
            MovieName: `The ${faker.lorem.words()}`,
            MovieID: i,
            Trivia: `Did you know that ${faker.lorem.sentence()}?`,
            Goofs: `${faker.lorem.sentence()}`,
            Quotes: `${faker.name.findName()}` + ': ' + `${faker.lorem.sentence()}\n` + `${faker.name.findName()}` + ': ' + `${faker.lorem.sentence()}`,
            AlternateVersions: `${faker.lorem.sentence()}`,
            Connections: `${faker.lorem.sentence()}`,
            Soundtrack: `Composed by: ${faker.name.findName()}, Arranged by: ${faker.name.findName()}, Featuring: ${faker.name.findName()}`
        })
    
        newMovie.save(function (err) {
            if (err) return console.error(err);
        });
    }
})