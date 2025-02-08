from django.test import TestCase
from django.contrib.auth.models import User

class LoginTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')

    def test_successful_login(self):
        login_successful = self.client.login(username='testuser', password='testpassword')
        self.assertTrue(login_successful)
        self.assertIn('_auth_user_id', self.client.session)
        self.assertEqual(str(self.user.id), self.client.session['_auth_user_id'])

    def test_incorrect_password(self):
         login_successful = self.client.login(username='testuser', password='wrongpassword')
         self.assertFalse(login_successful)
         self.assertNotIn('_auth_user_id', self.client.session)

    def test_incorrect_username(self):
        login_successful = self.client.login(username='wronguser', password='testpassword')
        self.assertFalse(login_successful)
        self.assertNotIn('_auth_user_id', self.client.session)

    def test_already_logged_in_user(self):
        self.client.login(username='testuser', password='testpassword')
        login_successful_again = self.client.login(username='testuser', password='testpassword')
        self.assertTrue(login_successful_again)
        self.assertIn('_auth_user_id', self.client.session)
        self.assertEqual(str(self.user.id), self.client.session['_auth_user_id'])
