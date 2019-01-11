
## React + Redux user roles handler

Aim of this app is to generate a form to handle user roles in multiple projects.

Only rule: each user can be assigned just one role per project.

The list of users, roles, projects, save and remove action execute an API call.

## How to use it

I used latest version of Firefox, but it works nicely in Chrome too.
Node v11.6.0 - npm 6.5.0 - yarn 1.12.3.

```
git clone git@github.com:ClaraAmeller/user-roles-app.git
cd user-roles-app
yarn
```

In one terminal start the JSON server with `yarn json-server --watch db.json`. This will use port 3000.

In another terminal start the app with `yarn start`. It will take port 3001.

To execute tests use
`yarn test`

## How it's made
I used `create-react-app` because I didn't want to spend a lot of time with webpack configurations, I just went straight to the point: create the react app. Also used <a href="https://tailwindcss.com/docs/what-is-tailwind/">Tailwind CSS</a> framework, <a href="https://github.com/typicode/json-server">json-server</a> as a REST API and <a href="https://www.npmjs.com/package/axios">Axios</a> to fetch the data.

About Redux... I wasn't that confident with it, so I started the app without it at first, just to see what would be the difference then. Created a new branch `redux` and let the chaos begin. I'll be honest, Redux was hard for me to understand - I didn't get what all those reducers and actions were. But after reading several "redux for beginners" articles I got the click and started to slowly work.
Despite understanding Reduxs' job and why people's using it, I think it's a lot of repeated code everywhere and several re-renders that "just happen". Maybe I'm doing something wrong :thinking_face:

For testing I used Jest (which comes by default with create-react-app) + Enzyme, 
<a href="https://github.com/ctimmerm/axios-mock-adapter">axios-mock-adapter</a> to mock the API calls and  <a href="https://github.com/dmitry-zaets/redux-mock-store">redux-mock-store</a>.