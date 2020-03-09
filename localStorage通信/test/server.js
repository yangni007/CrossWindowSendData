let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
    req.on('data', function() {

    })
    req.on('end', function() {
        if(req.url.includes('A')) {
            fs.readFile('./A.html', function(err, data) {
                if(err) {
                    console.log(err);
                    
                }
                
                res.write(data, 'utf-8');
                res.end();
            })
        }
        if(req.url.includes('index')) {
            res.write(fs.readFileSync('../index.js'));
            res.end();
        }
        if(req.url.includes('B')) {
            res.write(fs.readFileSync('./B.html'));
            res.end();
        }
    })
})

app.listen(3000, function() {
    console.log('server is start, port is 3000');
    
})