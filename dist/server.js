import app from "./app.js";
import { env } from "./configs/env.js";
app.listen(env.port, () => {
    console.log(`Movie API is running at http://localhost:${env.port}`);
});
