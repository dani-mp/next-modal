Example showcasing a page inside a nested layout with a modal controlled by the search params.

- Go to `/one/two` and click on the numbers to open the modal with the selected number. See how the `modal` search param changes accordingly.
- Closing the modal "cleans" the `modal` search param.
- Navigating to the page without the `modal` search param doesn't show the modal.
- Navigating to the page with the `modal` search param shows the modal.

## Run locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependencies:

```bash
npm i
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
