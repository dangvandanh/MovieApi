import app from "./app";
import { env } from "./configs/env";

app.listen(env.port, () => {
  console.log(`Movie API is running at http://localhost:${env.port}`);
});
