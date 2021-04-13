import { YT_VIDEO_ELEMENT_SELECTOR } from "./_shared";

document
  .querySelector(YT_VIDEO_ELEMENT_SELECTOR)
  .addEventListener("play", onPlay);
document
  .querySelector(YT_VIDEO_ELEMENT_SELECTOR)
  .addEventListener("seek", onSeek);
document
  .querySelector(YT_VIDEO_ELEMENT_SELECTOR)
  .addEventListener("pause", onPause);

let currentVideoID = "";

async function onPlay() {}
async function onSeek() {}
async function onPause() {}
