// connect to Redis
import redis from 'redis';
const REDIS_URL = process.env.HEROKU_REDIS_CYAN_URL ;
const client = REDIS_URL 
  ?   redis.createClient(REDIS_URL,
      {
         no_ready_check: true,
         auth_pass: redisPassword
      })
  : redis.createClient();
client.on('connect', () => {
  console.log(`connected to redis`);
});
client.on('error', err => {
  console.log(`Error: ${err}`);
});
export default client;