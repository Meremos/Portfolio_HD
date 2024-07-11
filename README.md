
# Portfolio_HD
My portfolio

## How to update pages on github

Using the npm module gh-pages.
Directly from the develop branch, the gh-pages branch is automatically updated on github.

- Change your code
- `git commit -am 'message...'`
- `git push`
- `npm run build`
- `npm run deploy`

Wait a few minutes and test.


## Deploy/test locally

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: the homepage attribute in package.json and the basename attrinbute  of the router in index.js should be the same.

## Update the main branch

To do after the commit and push.
```
git checkout main
git merge develop
git push
```