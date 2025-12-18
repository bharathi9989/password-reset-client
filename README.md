🔐 Password Reset Flow – Full Stack Application

This project implements a secure, industry-standard password reset flow using Node.js, Express, MongoDB, and React.

The application follows best practices used in real-world production systems, including token-based email verification and security-first design.

🚀 Tech Stack



Backend
	•	Node.js
	•	Express.js
	•	MongoDB + Mongoose
	•	Nodemailer
	•	bcrypt
	•	Crypto (secure token generation)

Frontend
	•	React (Vite)
	•	Axios
	•	React Router
	•	Bootstrap

⸻

🔄 Password Reset Flow (How it Works)
	1.	User clicks Forgot Password
	2.	User enters registered email address
	3.	Backend generates a secure random token
	4.	Token is hashed and stored in the database with an expiry time
	5.	A reset password link is sent to the user’s email
	6.	User clicks the link and is redirected to reset password page
	7.	Token is verified before showing the reset form
	8.	New password is saved (hashed)
	9.	Token is cleared after use (one-time only)

⸻

🔐 Security Design (Important)
	•	The forgot password API always returns a generic success message, even if the email does not exist.
	•	This prevents email enumeration attacks, which is a standard security practice.
	•	Reset tokens are:
	•	Cryptographically secure
	•	Hashed before storing in the database
	•	Time-limited (expiry enforced)
	•	Single-use only

⸻

🧪 How to Test Password Reset (Evaluator Instructions)

For security reasons, random or unregistered emails will not receive a reset email, but the API will still return success.

To test the complete password reset flow, please use the pre-created test account below.


✅ Test Account (Already Exists in Database

Email: testuser@example.com


📡 API Endpoints
Forgot Password
  POST /api/auth/forgot-password


  Request Body:

  {
  "email": "testuser@example.com"
}

Response:

  {
  "message": "Password reset link sent to email"
}

Verify Reset Token:
  GET /api/auth/reset-password/:token

Response
  {
  "valid": true
}


Reset Password:

  {
  "password": "NewStrongPassword123"
}
Response:

{
  "message": "Password updated successfully"
}

📁 Project Structure

    Backend


 src/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── utils/
 ├── config/
 └── app.js


    FrontEnd

src/
 ├── components/
 ├── pages/
 ├── lib/
 └── App.jsx



✅ Key Features
	•	Secure password reset with email verification
	•	Token hashing & expiry enforcement
	•	One-time reset links
	•	Frontend token verification before reset
	•	Clean MVC & component-based architecture
	•	Production-ready error handling

⸻

🏁 Conclusion

This project demonstrates a real-world implementation of a password reset system with a strong focus on security, scalability, and user experience.

It follows industry best practices and is suitable for production use.
