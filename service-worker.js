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
    "revision": "6307c38820c87ec4b2734bbe9f30a124"
  },
  {
    "url": "advertorial/index.html",
    "revision": "607fcbb7ce1b1ee9578b34d555b267f9"
  },
  {
    "url": "assets/css/0.styles.bf508314.css",
    "revision": "222576b0cd5cc0c42780e77fe0ff0e93"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.4de3da0e.js",
    "revision": "f8bb641f1ea3504e94eca9e8a1111068"
  },
  {
    "url": "assets/js/4.0016be50.js",
    "revision": "a1399f1366e688e3a0dc59fbf76751ec"
  },
  {
    "url": "assets/js/5.4969de98.js",
    "revision": "68b3ee84848aa53bfa1e02d3a9610155"
  },
  {
    "url": "assets/js/6.d04ea0af.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.e4025c28.js",
    "revision": "ee5e542cd7f685557dd120e575ba88d8"
  },
  {
    "url": "guide.html",
    "revision": "204c26c9127af687222a3c51b680cca7"
  },
  {
    "url": "images/photo.png",
    "revision": "7df7ee07dd1bfca80bbb1c999cfbe935"
  },
  {
    "url": "index.html",
    "revision": "5b5626a2a1312864fb33767db7f9d87c"
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
