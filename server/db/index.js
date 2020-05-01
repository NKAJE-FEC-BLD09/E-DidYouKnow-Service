var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DidYouKnow', {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
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

    var newMovie = new Movie({ 
        MovieName: 'Face/Off',
        MovieID: 9999,
        Trivia: 'Something',
        Goofs: 'Something',
        Quotes: 'Something',
        AlternateVersions: 'Something',
        Connections: 'Something',
        Soundtrack: 'Something'
    })

    newMovie.save(function (err) {
        if (err) return console.error(err);
    });
})