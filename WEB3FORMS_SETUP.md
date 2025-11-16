# Web3Forms Setup Guide

Web3Forms is a **FREE for lifetime** contact form backend service that requires no server-side code. Perfect for static websites and portfolios!

## Features
- ✅ **100% Free Forever** - No credit card required
- ✅ **No server needed** - Works with static sites
- ✅ **Spam Protection** - Built-in spam filtering
- ✅ **Email Notifications** - Get emails directly to your inbox
- ✅ **Easy Setup** - Just 2 simple steps

## Setup Instructions

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Enter your email address (where you want to receive messages)
4. Verify your email
5. Copy your **Access Key** (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### Step 2: Update Your Code

Open `src/components/Contact.tsx` and replace this line:

```typescript
access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Line 40
```

With your actual access key:

```typescript
access_key: "your-actual-access-key-here",
```

### That's it! 🎉

Your contact form is now fully functional and will send emails to your inbox!

## What You Get

- ✉️ Email notifications for every form submission
- 📊 Access to Web3Forms dashboard to view all submissions
- 🛡️ Built-in spam protection and validation
- 📱 Mobile-friendly form submissions
- 🔄 Backup of all form data in Web3Forms dashboard

## Pro Tips

1. **Custom Reply-To**: The form automatically includes the sender's email so you can reply directly
2. **Dashboard Access**: Log in to [web3forms.com](https://web3forms.com) to view all submissions
3. **Spam Protection**: Web3Forms includes honeypot and bot detection
4. **No Rate Limits**: Free plan includes unlimited submissions

## Need Help?

- 📚 [Web3Forms Documentation](https://docs.web3forms.com)
- 💬 [Support](https://web3forms.com/contact)

## Alternative Free Options

If you prefer other services:
- **Formspree** - [formspree.io](https://formspree.io)
- **FormSubmit** - [formsubmit.co](https://formsubmit.co)
- **Getform** - [getform.io](https://getform.io)

But Web3Forms is recommended for its simplicity and generous free tier!