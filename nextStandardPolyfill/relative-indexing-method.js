function at(n) {
  // ToInteger() abstract op
  n = Math.trunc(n) || 0;
  // Allow negative indexing from the end
  if (n < 0) n += this.length;
  // OOB access is guaranteed to return undefined
  if (n < 0 || n >= this.length) return undefined;
  // Otherwise, this is just normal property access
  return this[n];
}

// Other TypedArray constructors omitted for brevity.
for (let C of [Array, String, Uint8Array]) {
  if (!C.prototype.at) {
    Object.defineProperty(C.prototype, "at",
      {
        value: at,
        writable: true,
        enumerable: false,
        configurable: true
      });
  }
}