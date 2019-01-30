/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1cf1594b86145749bbb152eb321654d4"
  },
  {
    "url": "aboutme/index.html",
    "revision": "17d4d3c5bc1ae815668a3ac5bb606c02"
  },
  {
    "url": "accumulate/configuration/gulp.html",
    "revision": "47979183d487c5b0232db8d50126d03b"
  },
  {
    "url": "accumulate/configuration/webpack-vue2.html",
    "revision": "73cc2c6ac491f01b59f8bb37afd6a63f"
  },
  {
    "url": "accumulate/configuration/webpack.html",
    "revision": "c28adf89963fed307d9a69c2274d1cc1"
  },
  {
    "url": "accumulate/css/animation.html",
    "revision": "2938826d0821a2a2945ad1200371cba7"
  },
  {
    "url": "accumulate/css/bfc.html",
    "revision": "82af5f33f415ff0bbc791dbab06addf0"
  },
  {
    "url": "accumulate/css/dot-lines.html",
    "revision": "d4a86ecae5493ff5d075dd2cf5db63df"
  },
  {
    "url": "accumulate/css/maodian.html",
    "revision": "635971d9ddf97e8dab79610de390f52c"
  },
  {
    "url": "accumulate/html/canvas.html",
    "revision": "c639e5c15f625d3a7f316be9c65520c6"
  },
  {
    "url": "accumulate/index.html",
    "revision": "863034495cd8e208acde38636fe0ffca"
  },
  {
    "url": "algorithm/index.html",
    "revision": "54a3f9edfd3547818743fb6fde02206b"
  },
  {
    "url": "algorithm/two-stack-to-row.html",
    "revision": "6a69b87d6f70afa74557d5f66faf2cf6"
  },
  {
    "url": "assets/css/0.styles.6ba01dbc.css",
    "revision": "d11c19f89937e6ff1fdea80be1e138ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6bcab56d.js",
    "revision": "6bbf703442cb476a7c072c7945c92357"
  },
  {
    "url": "assets/js/11.ada11291.js",
    "revision": "cd5bb6141ac3414c3ed0041e85041acc"
  },
  {
    "url": "assets/js/12.8d727e1b.js",
    "revision": "d11b87965eefde81a727dd106d3659f3"
  },
  {
    "url": "assets/js/13.2468b28d.js",
    "revision": "33efb07c2d645e82255f3e98f6b8cd0b"
  },
  {
    "url": "assets/js/14.a642536a.js",
    "revision": "530a597f2fd28e4aae9d3f3a6fbc83d4"
  },
  {
    "url": "assets/js/15.9b6f175f.js",
    "revision": "611d0e4cd242f9e3cde694a76f8dd390"
  },
  {
    "url": "assets/js/16.e358d100.js",
    "revision": "838f7165a9ee021520bf673d15bcbb46"
  },
  {
    "url": "assets/js/2.14f91ed7.js",
    "revision": "4208b1f11c229914367fd61cdf2a2bde"
  },
  {
    "url": "assets/js/3.4c44146a.js",
    "revision": "c2f05a0f5b66419c0cc673346010ec82"
  },
  {
    "url": "assets/js/4.dc7041ef.js",
    "revision": "f1d384a3fd7d991a1e85f1255bef1e29"
  },
  {
    "url": "assets/js/5.96ce65d8.js",
    "revision": "d70bd09464f8af2f6ac73ecd6ecf6e65"
  },
  {
    "url": "assets/js/6.9183c1f3.js",
    "revision": "aec887270d09e2cfcbf49c444436cf47"
  },
  {
    "url": "assets/js/7.48f237c6.js",
    "revision": "2bbe1d166153d28c7450c08d9988337a"
  },
  {
    "url": "assets/js/8.9e176729.js",
    "revision": "c80e244725b5f34a0f793ecda2a3c69c"
  },
  {
    "url": "assets/js/9.b9fd3a14.js",
    "revision": "b04e222b214ee6bbfbb87a622e66342e"
  },
  {
    "url": "assets/js/app.42b9ba97.js",
    "revision": "eeff20556d6c784336019d7749dfae72"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/logo.jpeg",
    "revision": "373b880efa92c52c7666610badb25efe"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "6a6478bd68ecc539626d5059f2ad2862"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
