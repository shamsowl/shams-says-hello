export default function handler(req, res) {
  const now = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`📩 Image viewed at ${now} from IP: ${ip}`);
  
  // برگرداندن یک تصویر 1x1 سفید
  const img = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn0B9Zm+K5YAAAAASUVORK5CYII=',
    'base64'
  );
  
  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(img);
}
