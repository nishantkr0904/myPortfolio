# Nishant Kumar — Portfolio

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

```sh
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run test`    | Run tests                |
| `npm run lint`    | Lint the code            |

## Contact Form Setup (EmailJS)

The contact form uses EmailJS and sends two emails on submit:

- Owner notification email to `nishantkr.0904@gmail.com`
- Auto-reply confirmation email to the visitor

### 1. Add environment variables

Create `.env` from `.env.example` and fill these values from your EmailJS dashboard:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_CONTACT_TEMPLATE_ID`
- `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 2. Create EmailJS service

- Go to EmailJS > Email Services > Add New Service
- Connect your Gmail account (`nishantkr.0904@gmail.com`)
- Copy the generated Service ID

### 3. Create templates

Create two templates in EmailJS:

- Contact template (to you)
- Auto-reply template (to visitor)

The app sends these template parameters:

- Contact template params: `from_name`, `from_email`, `message`, `to_email`
- Auto-reply params: `to_name`, `to_email`, `from_name`, `reply_to`

### 4. Set EmailJS allowed domains

In EmailJS account settings, add your local and production domains:

- `http://localhost:5173`
- Your deployed portfolio domain

### 5. Configure production secrets (GitHub Pages)

If you deploy with GitHub Pages Actions, add these repository secrets in GitHub:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_CONTACT_TEMPLATE_ID`
- `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Path: `GitHub repository > Settings > Secrets and variables > Actions > New repository secret`

The workflow file `.github/workflows/deploy-pages.yml` reads these secrets during `npm run build`.

### 6. Verify locally

- Run `npm run dev`
- Submit the form
- Confirm both emails arrive:
  - one in your inbox
  - one in the visitor inbox
