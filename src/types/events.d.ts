export type VideoMouseEvent = MouseEvent & {
  type: "mousemove";
  currentTarget: EventTarget & HTMLVideoElement;
};

export type VideoTouchEvent = TouchEvent & {
  type: "touchmove";
  currentTarget: EventTarget & HTMLVideoElement;
};

// export interface VideoTouchEvent extends TouchEvent {
//   type: "touchmove";
//   currentTarget: EventTarget & HTMLVideoElement;
// }
