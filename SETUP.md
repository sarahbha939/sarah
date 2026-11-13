# Setup

Here you will find everything you need to make your portfolio.

This project uses [Node.js](https://nodejs.org) to run and [pnpm](https://pnpm.io) to install its packages.

> **Why pnpm?**
> pnpm is a package manager for JavaScript, like npm (which comes with Node.js). It's much faster, saves disk space by sharing packages between projects, and uses a lock file (`pnpm-lock.yaml`) so everyone gets the exact same package versions.

## Steps to follow

### 1. Install Node.js (one time)

You need Node.js 20.19 or newer. Check your version with:

```sh
node --version
```

Download the LTS version from [nodejs.org](https://nodejs.org) and install it. Close and reopen your terminal afterwards so the `node` command works.

### 2. Install pnpm (one time)

```sh
npm install -g pnpm
```

Or use the official installer:

| System | Command |
|---|---|
| macOS / Linux | `curl -fsSL https://get.pnpm.io/install.sh \| sh -` |
| Windows (PowerShell) | `Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing \| Invoke-Expression` |

Close and reopen your terminal afterwards so the `pnpm` command works.

### 3. Install and run the site

From inside this folder:

```sh
pnpm install
pnpm dev
```

`pnpm install` creates a `node_modules` folder and installs everything from `pnpm-lock.yaml`. Run it again only if the dependencies change.

Need another package? Use `pnpm add <package>`. It updates `package.json` and `pnpm-lock.yaml` for you.

### 4. View your site in your browser

Open the link printed in your terminal, usually <http://localhost:5173> or <http://127.0.0.1:5173>.

> **Tip:** If `localhost:5173` does not load, `127.0.0.1:5173` bypasses Windows localhost IPv6 resolution issues.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal to stop it.

### 5. Edit your portfolio

Once the site is loaded, open `src/data.ts`. It's the only file you need to change. Work through it from top to bottom:

| # | Section | What goes in it |
|---|---|---|
| 1 | The basics | Name, headline, pitch, photo, resume, email |
| 2 | Your look | Accent colour, light/dark default, font |
| 3 | Your links | GitHub, LinkedIn, and so on |
| 4 | About you | A few paragraphs, quick facts, and your education |
| 5 | Skills | Grouped into tags |
| 6 | Experience | Jobs, internships, volunteering, leadership |
| 7 | Projects | Your best 3 to 6, with pictures and links |
| 8 | Extras | Certifications, testimonials, writing and talks |
| 9 | Contact | The closing message |

Don't need a section? Empty its list, like `[]`, and it disappears from the page and the menu.

Your files go in the `public/` folder. It already has placeholder files you can replace (keep the same names, or change the names in `src/data.ts`):

| File | What it's for |
|---|---|
| `public/photo.jpg` | Your headshot |
| `public/resume.pdf` | Your resume (powers the "Download resume" button) |
| `public/project.png` | A screenshot for a project card |
| `public/og-image.png` | The picture shown when you share your link (1200 × 630; needs `SITE.url` set to show up) |

The page updates live as you save!

### 6. Build and deploy

To check the finished site before putting it online:

```sh
pnpm build
pnpm preview
```

`pnpm build` checks your code for mistakes and puts the finished site in the `dist/` folder. `pnpm preview` shows that build at <http://localhost:4173>.

To put it online for free, push this folder to GitHub and connect it to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Use `pnpm build` as the build command and `dist` as the output folder. The [README](README.md#deploying-this-template) has step-by-step notes for each one.

## Troubleshooting

**"pnpm is not recognized" / "pnpm: command not found"**
Close and reopen your terminal after installing pnpm. If it still fails, check the [install guide](https://pnpm.io/installation).

**"node is not recognized" / "node: command not found"**
Install Node.js from [nodejs.org](https://nodejs.org), then close and reopen your terminal.

**"Unsupported engine" or errors about your Node.js version**
Your Node.js is too old. Install the current LTS from [nodejs.org](https://nodejs.org).

**Port 5173 is already in use**
Vite will pick the next free port (like <http://localhost:5174>). Check the "Local" link printed in your terminal.

**Windows: "running scripts is disabled on this system" when running pnpm**
Run this once in PowerShell, then try again:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

**Red error text in the terminal or a `pnpm build` failure after editing `src/data.ts`**
Usually a missing quote, comma, or bracket. The error shows the line number. Compare that line with the placeholder entries around it.

**The page goes blank or shows an error after editing `src/data.ts`**
Check the terminal for the line number, fix the typo, and save again. The dev server restarts on its own when `data.ts` changes.

**The "Download resume" button is missing**
It only appears once `public/resume.pdf` exists (or whatever file name you set for `SITE.resume` in `src/data.ts`).

**Cloud deployment note**
This repo includes `pnpm-lock.yaml` and a `"packageManager"` field in `package.json`, so the host will install the exact same versions.

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Output folder | `dist` |
