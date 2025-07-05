# Email Forwarding Backend

This is a simple Node.js backend API for email forwarding using Express and Nodemailer.

## Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory (you can copy `.env.example`) and fill in your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password-or-app-password
   EMAIL_TO=recipient-email@example.com
   ```

4. The backend uses the `dotenv` package to load these environment variables securely.

## Running the Server

Start the server with:

```
npm start
```

The server will listen on port 3001.

## API Endpoint

- `POST /send-email`

Request body (JSON):

```json
{
  "name": "Sender Name",
  "email": "sender@example.com",
  "phone": "1234567890",
  "service": "Service Interested In",
  "message": "Message content"
}
```

The server will send an email with the provided details to the configured recipient email.

## Notes

- Make sure to allow less secure apps or use app passwords if using Gmail.
- For production, keep your `.env` file out of version control by adding it to `.gitignore`.
