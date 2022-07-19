var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < 3000 - t) {
    this.queue.shift();
  }
  return this.queue.length;
};

// 时间复杂度O(n)
// 空间复杂度O(n)