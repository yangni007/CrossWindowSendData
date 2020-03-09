let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
    req.on('data', () => {

    })
    req.on('end', () => {
        
        if(req.url.includes('/B')) {
            res.write(fs.readFileSync('./B.html', 'utf-8'));
            res.end();
        }
    })
})

app.listen(3001, function() {
    console.log('server satrt , port is : 3001');
    
})