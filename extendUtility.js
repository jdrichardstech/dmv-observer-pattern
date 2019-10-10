function extend(target, extensions) {
  for (let ext in extensions) {
    target[ext] = extensions[ext];
  }
}

module.exports = extend;
