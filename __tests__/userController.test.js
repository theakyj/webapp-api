jest.mock('../models/userModel');

const { loginUser, signupUser } = require('../controllers/userController');
const User = require('../models/userModel');

describe('User Controller', () => {
  test('loginUser should return a user', async () => {
    const mockUser = { _id: '1', email: 'test@example.com' };
    User.login.mockResolvedValue(mockUser);

    // Mock request object
    const req = { body: { email: 'test@example.com', password: 'password123' } };

    // Mock response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await loginUser(req, res);

    expect(User.login).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      email: 'test@example.com',
      token: expect.any(String)
    });
  });

  test('signupUser should create a user', async () => {
    const mockUser = { _id: '1', email: 'test@example.com' };
    User.signup.mockResolvedValue(mockUser);

    // Mock request object
    const req = { body: { email: 'test@example.com', password: 'password123' } };

    // Mock response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await signupUser(req, res);

    expect(User.signup).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      email: 'test@example.com',
      token: expect.any(String)
    });
  });
});
