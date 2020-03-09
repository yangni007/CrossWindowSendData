let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
    req.on('data', () => {

    })
    req.on('end', () => {
        console.log(req.url);
        if(req.url.includes('/A')) {
            fs.readFile('./A.html', function(err, data) {
                if(err) {
                    console.log(err);                
                }
                res.write(data);
                res.end();
            })
            
        }
    })
})

app.listen(3000, function() {
    console.log('server satrt , port is : 3000');
    
})