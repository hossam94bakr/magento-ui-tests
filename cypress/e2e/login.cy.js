import LoginPage from '../pages/LoginPage';
import userData from '../fixtures/userData.json';

describe('Login Test', () => {
  it('should login successfully', () => {
    const { email, password } = userData; 
    LoginPage.navigate();
    LoginPage.login(email, password);
  });
});