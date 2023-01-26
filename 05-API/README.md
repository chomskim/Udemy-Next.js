This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Connect MongoDB

```
[.env]
DB_PASSWORD=**************
DB_HOST=cluster0.******.mongodb.net

mongodb+srv://admin:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority

```
