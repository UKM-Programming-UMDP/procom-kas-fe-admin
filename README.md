# Procom Kas Frontend for Admin

### Requirements

- NodeJS v20.13.1
- NPM v10.5.2

### Development Setup

---

### Clone This Project

### Install

```bash
npm install
```

### Auto Formatter

- Install Prettier extension
- Configure Default Formatter into: Prettier - Code Formatter
- Make sure the auto format run everytime you save the file
- Make sure you open this project without any parent folder (.vscode folder must on on very top)

### Environment variables

- Copy sample.env and rename it to .env
- Ask backend developer for the backend URL
- Update the values with your values

# Development

### Create a new branch

To solve an issue from Backlog, always create a new branch to the related repository. The format is `{type}/{your-issue}`. Example:
`feature/add-middleware`, `fix/cannot-create-user`.

Note: Always create a branch from `development` branch.

---

### Commit changes

Commit at the smallest meaningful changes possible. Give clear and concise commit message:

1.  What has been created/modified
2.  What will be affected

This will help you and other team member to debug later when there’s a failure. Example commit message:

> add: balance history page

> edit: get user history

> fix: cannot display user list

---

### Run on your local

After making modifications, make sure you can run it on your local. Pay attention to warnings and errors and fix that before continue to next step.

```bash
npm run dev
```

Note: To access developer menu (such as F12 on browser) to see like Console, Network Activity, etc. You also can press F12 after run dev the app. But you can't do it after build the app.

---

### Build App Test

To make sure the app is running smoothly as a builded software, you need to build it first by run:

```bash
npm run build:win
```

And then test is by run:

```bash
npm run start
```

This is how you final test your app, not from `npm run dev`. You also can install your app locally from `dist/app-name-setup.exe` after build. This is similar to `npm run start` but the difference is, you can open this app without running the entire project code.

---

### Push to your branch

Push your working modification to **your own branch**.

---

### Make a Pull Request

- Make a pull request into development branch
- Sync your branch by running `git pull origin development`
- Make sure your code still working and remove any conflict
- Create the PR

Give clear PR title message to **each** branch, let the other developer know what you’re trying to merge. Example PR title:

> Feature/Balance Page

> Fix/Cannot display list of user

---

### Main Branches

**Development**

- Every development and testing must be on this branch.
- This branch will using development database.

**Staging**

- Every issues from development, will be cherry-picked into this branch along with versioning.
- THis branch will using production database for final testing.

**Master**

- Full release into production.
