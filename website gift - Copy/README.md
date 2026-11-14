# For LOLO ♡

A cute, romantic website gift personalized for LOLO.

## Current settings
- Nickname: LOLO
- Countdown: December 25, 2026
- Soundtrack label: Heavenly — Cigarettes After Sex
- Features: photo gallery, hidden letter, interactive quiz, countdown, audio player

## Personalize
1. Open `script.js` and edit the `QUIZ` questions, answers, correct answers, and messages.
2. Open `index.html` and edit the hidden letter to include your own memories and words.
3. Put three photos in the `photos` folder named `photo1.jpg`, `photo2.jpg`, and `photo3.jpg`.
4. For music, add an audio file you have permission to use as `music/song.mp3`. Alternatively, link to the track through a legitimate music service. The song is not included in this project.

## Preview
Double-click `index.html` to open it in a browser.

## Publish free with GitHub Pages
1. Sign in at https://github.com.
2. Create a public repository named `for-you-gift`.
3. Upload the contents of this folder to the repository root (not the outer folder).
4. Go to Settings → Pages.
5. Choose Deploy from a branch, branch `main`, folder `/(root)`, then Save.
6. Wait for GitHub Pages to publish and use the URL shown there.

The repository files will be public. Only upload photos you are both comfortable sharing, and don't put private information on the site.


PHOTO FIX (important): The gallery fallback has been fixed so missing/broken image files no longer hide the placeholder. Put your photos in the `photos` folder and name them exactly `photo1.jpg`, `photo2.jpg`, and `photo3.jpg`. Check the real file extension in Windows Explorer: if it is `.png` or `.jpeg`, either convert it to JPG or update the corresponding `src="photos/photo1.jpg"` path in `index.html`. Keep the `photos` folder next to `index.html`.
