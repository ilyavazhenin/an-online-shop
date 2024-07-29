import express from 'express';
import { renderToString } from 'react-dom/server';
import app from './dist-server/entry-server.js';

const server = express();

server.get('*', function(_request, response) {
  const html = renderToString(app);
  response.end(html);
})

server.listen(5175);
