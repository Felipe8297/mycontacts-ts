import app from './server';

Bun.serve({
  port: 3001,
  fetch: app.fetch,
});

console.log('Server is running on port 3001');
