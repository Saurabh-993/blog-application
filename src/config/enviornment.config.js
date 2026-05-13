import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
//Here we have created this file Inside the src/config folder so we have to provide it the path through which it can access the .env
//Generally both should be at the same path means at the root.

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//through these path resolution we resolved the whole paths and finally our .env variable are ready to be injected.

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
