var needle = require('needle');

var id = null;

var setInt = setInterval(newIteration, 100);

function newIteration() {
    var options = {
        host : 'server:3000/',
        format : 'json',
        content_type: 'application/json'
    };
    var x = {
        id: id,
        number : 10
    }
    
    needle.request('post', options.host, x,{json:true}, function(err, resp) {
        if (!err) {
            if(resp.body.toString()=="finish"){
                clearInterval(setInt)
            }

            id=parseInt(resp.body.toString())
        }
    
        if (err) {
            console.log(err);
        }
    })
}
