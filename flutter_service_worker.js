'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "56338a38f9f3eceeb025e4d67007e900",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d33ffa854756227811fe843a7a526acb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aefa8f85efde3e6008f401ba8812b8cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d46026b2a1e3eb34ff71786a5de0d479",
".git/logs/refs/heads/master": "d46026b2a1e3eb34ff71786a5de0d479",
".git/logs/refs/remotes/origin/HEAD": "800a2f4dbe818ebfd8962515fb6feb1c",
".git/logs/refs/remotes/origin/master": "07e4348d7e0058783eb9bed64e86f365",
".git/objects/0e/759eb2c684e6dde19038a3f3dc3fa8acab5105": "549d858ae9b31026ff4deaaad302d2ac",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/8389f75d7b6443229c69e8662ee11f7006e713": "0d99146175a146c104602c46d2804c3e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/29/5239b3c00fa0bc3783cc76c5f1a6cee1420b72": "6b70f560720089ddf83be499d9710b87",
".git/objects/2f/ef7d9c176116f34fae5517fc12dc9182fb745e": "92a0f7a0b583ed98782b5375f071cbd7",
".git/objects/34/5f619fe1af960c2a02b00d57f4798771c8e664": "1511f7232b486ee930cc2148a379ccf3",
".git/objects/34/681e43cb1c1dc658d8d05dcdfbf2c1d5cf0537": "08993aaf0a126af40fe065950c41b5a2",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/9815cfc74f30ea4fc354943bf480b6060c0295": "5a5fdb69845695fd6c337a8146b90ac0",
".git/objects/41/2219137082cb1d500d80e9d1e39ca204b73901": "d451b2c6440f9add35f6e7a44086f6d6",
".git/objects/47/26bcad350ad917ac113212c8fcb6b314592d64": "516379cac540f77f083d9834bd14d118",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/14a1bab6146e98ed9b7b518486d1e93c5d4347": "90d9b5061070b4ee54d090fdafab0a0e",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/871462eb7cd0a6ec139605ba8804f248dc1b1a": "62ff614fbb1743d677d9f382d9498465",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/9b36863cdf39c27ac400770c0e2834f8d0762d": "21a5a4248d7ef7f27c38038401abddd6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/71f05e783cc5ee422054ccf9d61367b5ab06ea": "427edf3eea38f8687f2012b0126f2be5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f43ea463db5082788c51a582566588716b13a5": "371610a9ca2c6e6552fa7fbe8478c15f",
".git/objects/ad/15952d48554d06d6a67090311f3ca0706556fe": "2846a938c51a2024a81931e9c2d9cd8f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/7319686633eea0437e9517cda10b74b5cdef8f": "8469a39f31fade09d20641ac43a68227",
".git/objects/c9/452247dc9c779e478dbcc1045974b09256ef57": "c65b6c8cf7a529df886cadc892c3ee43",
".git/objects/cc/f172a0efce58b95803f8ff6f11ec764c518fc3": "3f990007ddf8ab9424aead089b8214fe",
".git/objects/cd/823a9cae5d18d277996e573c9169c589cdfc88": "11fc80f35e55ea77fa83b86efa4ad1a9",
".git/objects/d5/ad891ec1631075e538514fb5bf8b47705e641e": "5f37b1c48bc43cc763da0c52c08b1024",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/7d1f63f5f93bd67b3de6ef09a914fa49a36b59": "93a59c397a0c9d9ea66c031e006ff21c",
".git/objects/db/ba7f8352565c92df2b65a8c5ee981fdc142d28": "f94dcd50520adfa2c23574e5149b03f9",
".git/objects/df/7f68fa93d29743fcf0b54dfd85d7ac924a1950": "36fe6b9a642147f115a5da49f2530e52",
".git/objects/e3/361609be87918ebae0e597c33017073a393d02": "48b97d18e3816e9c00a087d93572b79c",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/7a62de4819b593ac52ba477a7131c6fb6eb617": "c48a259b6056461feb030536fc3f3d9b",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/939ddbe4fad08445b83843a6f7ebe494ed394e": "ef6cd2b385d4b7f431d9fc704db90687",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "86d1df63560abc91aaa26163415dd156",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "86d1df63560abc91aaa26163415dd156",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "378ea448a83aef3d03f851d404bbafe3",
"2022.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "cb363a0a9865fc5a8bf8eac31027c4fc",
"assets/assets/icon/gmail-logo.png": "e570439807e707a6da44d6525f2ae7dc",
"assets/assets/icon/ic_launcher.png": "f1c6172e6d345170c3d21760a9fc03c2",
"assets/assets/icon/ic_launcher_adaptive_back.png": "84298bec96cee3d6df8020b117f4b908",
"assets/assets/icon/ic_launcher_adaptive_fore.png": "230ee8db8309046dda98bcf084236fa2",
"assets/FontManifest.json": "66e6bbbb963d431a261f60dc18e9558a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NotoSerifSC-Regular.otf": "9c722c930ebf1e61e92053719ddbab64",
"assets/NOTICES": "0b35da6e4def079b40766bd512feca61",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "0e9895d41abed7725813b12f97e75b01",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ab21dcf2ccb05ce9a50fdbe8f80217b0",
"icons/Icon-512.png": "3e80ecd91201f78af6e34af36bcef42f",
"icons/Icon-maskable-192.png": "ab21dcf2ccb05ce9a50fdbe8f80217b0",
"icons/Icon-maskable-512.png": "3e80ecd91201f78af6e34af36bcef42f",
"imagination2022.md": "e4e4f58b889ea7e45caf2c0598c73daa",
"index.html": "25a99cf3a69b1280b811889c5e4e3627",
"/": "25a99cf3a69b1280b811889c5e4e3627",
"main.dart.js": "a60ae0e690ecb603b8d4c42c4b1591e8",
"manifest.json": "7f517816552b9f9614e9d947f735f564",
"version.json": "8250ecca5e4464678a3bee9107acda28"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
