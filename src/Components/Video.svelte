<script lang="ts">
  import type { VideoMouseEvent, VideoTouchEvent } from "~/types/events";
  import { getTouchPosition } from "~/utils/getTouchPosition";

  // These values are bound to properties of the video
  let time = 0;
  let duration: number;
  let paused = true;

  let showControls = true;
  let showControlsTimeout: NodeJS.Timeout;

  // Used to track time of last mouse down event
  let lastMouseDown: number;

  function handleMove<T>(
    e: T extends { type: "mousemove" } ? VideoMouseEvent : VideoTouchEvent
  ) {
    // Make the controls visible, but fade out after
    // 2.5 seconds of inactivity
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => {
      showControls = false;
    }, 2500);
    showControls = true;

    if (!duration) return; // video not loaded yet
    if (e.type === "mousemove" && e.buttons !== 1) return; // mouse not down

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const clientX = e.type === "touchmove" ? getTouchPosition(e).x : e.clientX;
    const { left, right } = e.currentTarget.getBoundingClientRect();
    time = (duration * (clientX - left)) / (right - left);
  }

  function handleTouchMove(e: TouchEvent) {
    handleMove<VideoTouchEvent>(e as VideoTouchEvent);
  }

  function handleMouseMove(e: MouseEvent) {
    handleMove<VideoMouseEvent>(e as VideoMouseEvent);
  }

  // we can't rely on the built-in click event, because it fires
  // after a drag — we have to listen for clicks ourselves
  function handleMousedown() {
    lastMouseDown = Date.now();
  }

  async function handleMouseup(
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLVideoElement;
    }
  ) {
    if (Date.now() - lastMouseDown < 300) {
      if (paused) await e.currentTarget.play();
      else e.currentTarget.pause();
    }
  }

  function format(fullSeconds: number) {
    const minutes = Math.floor(fullSeconds / 60);
    const seconds = Math.floor(fullSeconds % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
</script>

<div>
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    on:mousemove={handleMouseMove}
    on:touchmove|preventDefault={handleTouchMove}
    on:mousedown={handleMousedown}
    on:mouseup={handleMouseup}
    bind:currentTime={time}
    bind:duration
    bind:paused
    autoplay={true}
  >
    <track kind="captions" />
  </video>

  <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
    <progress value={time / duration || 0} />

    <div class="info">
      <span class="time">{format(time)}</span>
      <span>click anywhere to {paused ? "play" : "pause"} / drag to seek</span>
      <span class="time">{format(duration)}</span>
    </div>
  </div>
</div>

<style>
  div {
    position: relative;
    height: 100%;
  }

  .controls {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 1s;
  }

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  span {
    padding: 0.2em 0.5em;
    color: white;
    text-shadow: 0 0 8px black;
    font-size: 1.4em;
    opacity: 0.7;
  }

  .time {
    width: 3em;
  }

  .time:last-child {
    text-align: right;
  }

  progress {
    display: block;
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 0.2);
  }

  progress::-webkit-progress-value {
    background-color: rgba(255, 255, 255, 0.6);
  }

  video {
    width: 100%;
    height: 100%;
  }
</style>
