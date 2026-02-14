# Meta Ads Manager

An open-source, self-hosted tool for launching and managing Facebook/Instagram ads without Meta's Ads Manager UI. Built with Next.js, Supabase, and the Meta Marketing API.

## Why?

Meta's Ads Manager is powerful but overwhelming — especially if you just want to launch simple ad campaigns for your small business. Meta Ads Manager strips it down to the essentials:

- **Pick a template** instead of configuring 47 settings
- **Launch in seconds** with sane defaults for your vertical
- **Track performance** on a clean dashboard with the metrics that matter
- **Manage multiple brands** (e.g., LawnVoice, PlumberVoice) from one place

## Features

- **Vertical-aware templates** — Reusable ad templates with pre-configured targeting, messaging, and creative per business type
- **One-click campaign launch** — Select template, set budget and location, hit launch
- **Performance dashboard** — Daily spend, clicks, CPC, conversions, and cost-per-conversion at a glance
- **Campaign controls** — Pause, resume, and adjust budgets from the dashboard
- **Creative library** — Upload and manage ad images and videos
- **Multi-vertical support** — Run campaigns across different business verticals from a single deployment
- **Self-hosted** — Your data, your Meta credentials, your control

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Database & Auth:** [Supabase](https://supabase.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4
- **Components:** [shadcn/ui](https://ui.shadcn.com)
- **Ads API:** [Meta Marketing API](https://developers.facebook.com/docs/marketing-apis/) (Graph API)
- **Validation:** [Zod](https://zod.dev)

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Meta Developer](https://developers.facebook.com) app with Marketing API access

### Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/curtiskline/meta-ads-manager.git
   cd meta-ads-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase URL/keys and Meta App credentials. See `.env.example` for descriptions of each variable.

4. **Start the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/
│   └── ui/           # shadcn/ui components
└── lib/
    ├── supabase/     # Supabase clients (browser, server, admin)
    └── utils.ts      # Shared utilities
```

## License

[MIT](LICENSE)
