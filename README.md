# All-Star Code Demo

Example of setting up a component, with tests

Uses https://picsum.photos/ API

```sh
cd ~/sites
npx create-react-app asc-tested-site
cd asc-tested-site
```

open 2 terminals

- in the first, run `npm start`
- in the second, run `npm test`

Click the **localhost** link to open the basic site in a browser. (Or copy it into your browser)

trying editing [App.js](./src/App.js). What happens if we replace the word "React" with "Java"?

delete the \<img\> and \<a\> tags for now.

update test to check for new expected text

add `useState` and `useEffect` to the imports at the top of the page.

create the data/loading/error consts

create content const to display loading message
check if response was 200, set data to response. else set error

add test to check for image

add rendering for error
add {seed} prop to App.js and index.js

npm install --save-dev jest-fetch-mock

update src/setupTests.js
update test
