# Email Setup for Contact Form

## Overview
The contact form is now fully functional and will send emails directly to your inbox when visitors submit messages.

## Setup Instructions

### 1. Create Environment Variables
Copy `.env.example` to `.env.local` and fill in your email credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual email settings:

```env
# Email configuration for contact form
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_RECEIVER_EMAIL=your-email@gmail.com
```

### 2. Gmail Setup (if using Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password as `EMAIL_PASS`

### 3. Alternative Email Providers
For other email providers, update the settings:

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

## Features Implemented

✅ **Email Sending**: Messages are sent directly to your email
✅ **Validation**: All fields are required, email format validated
✅ **Loading States**: Shows "Sending..." while processing
✅ **Error Handling**: Clear error messages for validation and server errors
✅ **Duplicate Prevention**: Button disabled during sending and after success
✅ **Responsive Design**: Works on all screen sizes
✅ **HTML Email**: Beautifully formatted emails with sender info
✅ **Reply Support**: Can reply directly to the sender's email

## Testing
1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the message

## Security Notes
- Email credentials are stored in environment variables (never exposed to frontend)
- Input validation on both frontend and backend
- HTML content is properly escaped in emails
- Rate limiting can be added if needed

## Troubleshooting

**"Authentication failed" error:**
- Check your email password (use App Password for Gmail)
- Verify SMTP settings for your email provider

**"Connection timeout" error:**
- Check firewall settings
- Verify SMTP host and port are correct

**Email not arriving:**
- Check spam/junk folder
- Verify `CONTACT_RECEIVER_EMAIL` is correct
- Check server logs for any errors
