import config from "@/lib/config";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  token: config.env.upstash.redisToken,
  url: config.env.upstash.redisUrl,
});

export default redis;
