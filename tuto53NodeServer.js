const http=require('http');

const fs=require('fs');

http.createServer(function(req,res){

    res.writeHead(200,{'content-type':'text/html'});
    const html=fs.readFileSync('./tuto28GridLayout.html');
    res.end(html);
}).listen(3000,()=>{
    console.log('running on 30000');
});


// const fileContent=fs.readFileSync('tuto28GridLayout.html');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(fileContent);
// })

// server.listen(80, '127.0.0.1',()=>{
//     console.log("Listining on port 80:.....");
// })