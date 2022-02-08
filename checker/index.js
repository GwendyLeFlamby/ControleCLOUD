var needle = require('needle');

setInterval(() => {
    let start = Date.now()
    needle.get('server:3000', function(error, response) {
        if (!error && response.statusCode == 200){
            let stop = Date.now()
            console.log("time in ms : " +(stop - start));
        }
      });
}, 100);
