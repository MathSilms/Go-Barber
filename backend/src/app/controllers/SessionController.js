import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findeOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
  }
}

export default new SessionController();
