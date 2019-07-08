# losolio.github.io

[![Build Status](https://travis-ci.com/losolio/losolio.github.io.svg?branch=source)](https://travis-ci.com/losolio/losolio.github.io)

## Setting up this as my user page

Generate a new gatsby site from the CLI.

Have the source code in the source branch, as github uses the master branch for serving user/organization page.

```sh
git branch -m source
git push -u origin source
```

Install github pages: `npm install gh-pages --save-dev`

Add a script to deploy pages in package.json: 
```
    "scripts": {
        "deploy": "gatsby build && gh-pages -d public -b master",
    }
```

To deploy, just run `npm run deploy`.

### Add automatic deployment with Travis CI

1. Add `.travis.yml`
1. Add a new Github access token here: Setting > Developer settings > Personal access tokens
1. Save your personal access token as an environment variable named `GITHUB_TOKEN`.

With inspiration from 
 * [How we switched to documentation-as-code with Gatsby.js and Netlify — Markdown & hosting](https://medium.com/squadlytics/how-we-switched-to-documentation-as-code-with-gatsby-js-and-netlify-part-1-2-1f57ad732a05)
 * [Gatsby docs: How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
 * [Travis CI docs: GitHub Pages Deployment](https://docs.travis-ci.com/user/deployment/pages/)
