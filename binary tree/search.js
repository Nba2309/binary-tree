Node.prototype.search = function (val) {
  if (this.value == val) {
    return this;
  }
  else if (val < this.value && this.left != null){
    return this.left.search(val);
  }
  else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
};

Tree.prototype.search = function (val) {
  var found = this.root.search(val);
  return found;

};
