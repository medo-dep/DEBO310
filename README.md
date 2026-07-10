DEBO For General Service - Next.js prototype

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Open http://localhost:3000

Notes:
- This is a static prototype. Form submissions call `/api/send` which only simulates sending an email (logs to console) and then opens WhatsApp with a prefilled message.
- The project uses Tailwind CSS; run `npm run dev` to see styles.
