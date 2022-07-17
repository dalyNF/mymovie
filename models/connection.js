var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://movieUser:3dom4bdd@atlascluster.ewlspmp.mongodb.net/mymoviezapp?',
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose