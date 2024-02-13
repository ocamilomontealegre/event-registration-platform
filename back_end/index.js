import { say } from 'cowsay';
import app from './app.js';
import { PORT } from './src/utils/config.js';

// Listen server port
app.listen(PORT, () => {
  console.log(say({
    text: `Server listening on port http://localhost:${PORT}`,
    w: 40,
    T: 'U '
  }));
});
