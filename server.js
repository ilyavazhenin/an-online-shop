import express from 'express';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';
import createServerApp from './dist-server/entry-server.js';

const template = readFileSync('./dist/index.html').toString('utf-8');
const server = express();

// server.use(express.static('dist'));

server.get('*', function(_request, response) {
  const app = createServerApp();
  const html = renderToString(app);
  const page = template.replace('<!--SSR-->', html);
  response.end(page);
})

server.listen(5175);
