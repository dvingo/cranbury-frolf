# Frisbee golf map app

# Dev Setup

Run:

```bash
npm i
npm run dev
```

Point browser at localhost:3000

You can change the port here:
https://github.com/dvingo/react-starter-pack/blob/master/server-config.js

# Project layout

1. React components live under `components`.
2. Nuclear state management is under the `app/state` directory.
3. Styles live under `app/styles`.
4. Routes are in `app/routes.js`.
5. Build runs via package.json run script:

    NODE_ENV=dev node dev-server.js

6. Express server to serve the app is under server.js.
