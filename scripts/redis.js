// connect to Redis
import redis from 'redis';
const REDIS_URL = process.env.REDIS_URL ;
const redisPassword = process.env.REDIS_PASS;
const client = (REDIS_URL && redisPassword) 
  ?   redis.createClient({
      host: REDIS_URL,
      user: 'h' ,
      port: 18869,
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