/**
 * Throttled window.resize event emitter singleton
 */

import throttle from "lodash.throttle";

class ResizeEvent {
  listeners = [];
  listeningForResize = false;

  addListener(cb) {
    this.listeners.push(cb);
    this.updateSubscription();
  }

  removeListener(cb) {
    this.listeners = this.listeners.filter(fn => fn !== cb);
    this.updateSubscription();
  }

  updateSubscription() {
    if (this.listeningForResize && this.listeners.length === 0) {
      window.removeEventListener("resize", this.emit);
      this.listeningForResize = false;
    } else if (!this.listeningForResize && this.listeners.length > 0) {
      window.addEventListener("resize", this.emit);
      this.listeningForResize = true;
    }
  }

  emit = throttle(
    () => {
      this.listeners.forEach(cb => cb());
    },
    100,
    { trailing: true }
  );
}

const resizeEvent = new ResizeEvent();

export default resizeEvent;
