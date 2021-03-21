//1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով
// և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:

const fs = require("fs");

const readStream = fs.createReadStream("./input.txt", {
    highWaterMark: 10
});

readStream.on("data", (chunk) => {
    console.log(chunk.toString().replace(/[^\w\n\s]/g,"")
    )
});

readStream.on("end", () => {
    console.log("end")
});


