import { Express, Router } from 'express';
import fg from 'fast-glob';

export default (app: Express): void => {
  const router = Router()
  fg.sync('**/src/main/routes/**routes.ts').map(async file => (await import(`../../../${file}`)).default(router))
  // router.post('/signup', (req, res) => {
  //   res.json({ ok: 'ok' });
  // });
  app.use('/api', router)
}