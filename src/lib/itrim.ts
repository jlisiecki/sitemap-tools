declare global {
  interface String {
    itrim(): string;
  }
}

String.prototype.itrim = function () {
  return this.replace(/[\s\r\n]+/g, " ").trim();
};

export {};
