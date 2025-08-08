const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/tr.jpg') {
        // ثبت زمان باز شدن ایمیل
        const logMessage = `Email opened at: ${new Date().toISOString()}\n`;
        fs.appendFileSync('email_open_log.txt', logMessage);

        // ارسال تصویر 1x1
        const imagePath = path.join(__dirname, 'public', 'tr.jpg');
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        fs.createReadStream(imagePath).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
