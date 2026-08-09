# AI Usage Log & Prompts

This project was built entirely using AI-assisted "vibe coding" via Google Antigravity. Below is a log of the key prompts and architectural instructions used to generate, style, and debug the application.

## 1. Initial Architecture & UI Generation
The foundation of the app was built by providing specific visual and structural guidelines:
- **Prompt:** "Create a Next.js App Router application with Tailwind CSS for a 60-day challenge tracker. Include a landing page, a dashboard with a 60-day grid, and a challenge day details page."
- **Prompt:** "Use mock data for the 60-day state (completed, current, locked, missed) and the user profile. Ensure it works on a mobile-first 390px layout."

## 2. Design System: "Ultra-Premium Minimalist Luxury"
The first major stylistic overhaul was driven by strict design constraints:
- **Prompt:** "You are a Lead Front-End Architect. Your task is to style the application using an ultra-premium, minimalist luxury aesthetic. Backgrounds MUST be true black. Text must use high-contrast hierarchy. Use clean sans-serif fonts with tight kerning. Rely on hair-thin borders. NO gradients, NO blur, NO shadows."

## 3. Design System: "Industrial Engineer"
We experimented with a completely different brutalist aesthetic:
- **Prompt:** "Redesign this using the 'Industrial Engineer' design system. Target audience is developers using the app late at night. Backgrounds MUST be pure black. Introduce exactly ONE accent color: a harsh terminal green (#00FF41). Use Monospace fonts for all numbers/labels. Eradicate all shadows and curves (rounded-none)."

## 4. Design System: "Premium Tactile" (Final Version)
We settled on a sophisticated, glowing dark-mode aesthetic:
- **Prompt:** "Redesign this so it looks undeniably expensive and polished. Use a deep rich base (bg-[#0a0a0a]). Introduce 'Studio Lighting' using large radial gradients. Give cards a subtle lift using inner borders and microscopic metallic highlights. Use ambient glows for active elements instead of heavy shadows."

## 5. Debugging & State Management
During live testing on Vercel, the serverless environment kept resetting the state. We used AI to completely refactor the data layer:
- **Prompt:** "i sent the live link and got the suggestion this will show acees request change into public could you verify this"
- **Prompt:** "hloo i cant submit work in live link"
- **AI Action:** Identified that Vercel Serverless Functions were wiping the in-memory array. Refactored the architecture to use React Context and `localStorage` so the app would function perfectly on the client side without a real database.
- **Prompt:** "submit proof of work not working"
- **AI Action:** Diagnosed a hidden HTML5 native validation blocker (`type="url"`) and an async React state bug. Rewrote the submit logic to be fully synchronous and relaxed the input validation for testing.


