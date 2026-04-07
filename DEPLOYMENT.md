# CBT Platform Deployment & Publishing Guide

This guide outlines the steps required to deploy the CBT platform to the web.

## 1. Prerequisites

*   **Supabase Project:** Create a project at [supabase.com](https://supabase.com).
*   **Hosting Account:** Choose a hosting provider (Vercel or Netlify is recommended for Vite/React apps).
*   **Domain (Optional):** Purchase a domain name (e.g., `.com`, `.ng`).

## 2. Environment Setup

1.  **Get Supabase Keys:** In your Supabase dashboard, go to **Project Settings > API**.
2.  **Copy Credentials:** Copy the `Project URL` and `anon public` key.
3.  **Local Setup:** Create a `.env` file in the project root:
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

## 3. Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy Vite-based React applications.

1.  **Push your code to GitHub/GitLab/Bitbucket.**
2.  **Import to Vercel:** Go to [vercel.com](https://vercel.com) and click **"Add New" > "Project"**.
3.  **Import Repository:** Select your repository.
4.  **Configure Environment Variables:**
    *   Expand the **Environment Variables** section.
    *   Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
5.  **Deploy:** Click **Deploy**. Vercel will automatically build and publish your site.

## 4. Deploying to Netlify

1.  **Connect Git Repository:** Log in to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2.  **Build Settings:**
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
3.  **Environment Variables:** Go to **Site Settings > Environment variables** and add your Supabase keys.
4.  **Redirects:** Netlify uses the provided `vercel.json` or you can add a `_redirects` file in the `public` folder with the content: `/* /index.html 200`.

## 5. Deploying via Docker (Custom VPS)

If you are using a custom VPS (DigitalOcean, AWS, etc.):

1.  **Build Docker Image:**
    ```bash
    docker build -t cbt-platform .
    ```
2.  **Run Container:**
    ```bash
    docker run -p 80:80 \
      -e VITE_SUPABASE_URL=your_url \
      -e VITE_SUPABASE_ANON_KEY=your_key \
      cbt-platform
    ```

## 6. Next Steps for Production

*   **Authentication:** Replace the `MOCK_USER` in `src/store/examStore.ts` with real Supabase authentication logic using `supabase.auth.signInWithPassword()`.
*   **Database Schema:** Create the necessary tables (`exams`, `attempts`, `questions`, `profiles`) in your Supabase SQL Editor.
*   **Security Rules:** Set up Row Level Security (RLS) in Supabase to protect user data.
*   **Custom Domain:** Map your custom domain in the hosting provider's dashboard.