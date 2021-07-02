import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
    <lable>Password</label>
    <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'gary@gary.com' && password === 'gary') {
    //mark this person logged in
    req.session = { loggedIn: true };
    //redirect to correct route
    res.redirect('/');
  } else {
    res.send('Invalid email or password.');
  }
});

export { router };
