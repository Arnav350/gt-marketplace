from django.test import TestCase
from django.contrib.auth import get_user_model
User = get_user_model()
class CustomUserModelTest(TestCase):
    def setUp(self):
        # Django’s built-in function to get the current user model
        self.user_model = User

    def test_create_user(self):
        # Create a new user using the default manager
        user = self.user_model.objects.create_user(
            username="testuser",
            email="test@example.com",
            password="testpass123"
        )

        # Check if the user was created correctly
        self.assertEqual(user.username, "testuser")
        self.assertEqual(user.email, "test@example.com")
        
        # Check that the password was hashed (not stored in plain text)
        self.assertTrue(user.check_password("testpass123"))

    def test_create_superuser(self):
        # Create a superuser
        admin_user = self.user_model.objects.create_superuser(
            username="admin",
            email="admin@example.com",
            password="adminpass123"
        )

        # Check is_superuser and is_staff flags
        self.assertTrue(admin_user.is_superuser)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.check_password("adminpass123"))

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
