# fb-wrapper

[![npm](https://img.shields.io/npm/v/fb-wrapper.svg)](https://www.npmjs.com/package/fb-wrapper)
[![Travis (.org)](https://img.shields.io/travis/mkosir/fb-wrapper.svg)](https://travis-ci.org/mkosir/fb-wrapper)
[![npm bundle size](https://img.shields.io/bundlephobia/min/fb-wrapper.svg)](https://www.npmjs.com/package/fb-wrapper)

## Highly opinionated Facebook API client for Node.js

This is a small heavily opinionated utility wrapper library around [facebook-node-sdk](https://github.com/node-facebook/facebook-node-sdk).  
It is implemented with facade pattern which translates facebook-node-sdk library's existing interface into simplified one.

## Install

```shell
npm i fb-wrapper
```

## Usage:

Only most commonly used function for interacting with Facebook API are implemented:

- postOnWall(msg: string): Promise<string>
- getFeed()
- getInfo(fields: string[] = ['id', 'name'])

```js
const FacebookClient = require('fb-wrapper');
const facebookClient = new FacebookClient(facebookToken, facebookAppID, facebookAppSecret);

// post on the wall
try {
  const msgToPost = 'Post a test message';
  const postId = await facebookClient.postOnWall(msgToPost);
  console.log(postId);
} catch (e) {
  console.error(e);
}

// get feed
try {
  const feed = await facebookClient.getFeed();
  console.log(feed);
} catch (e) {
  console.error(e);
}

// get info
try {
  const requestedInfo = await facebookClient.getInfo(['id', 'name']);
  console.log(requestedInfo);
} catch (e) {
  console.error(e);
}
```
