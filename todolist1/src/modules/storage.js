var app = {
  set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  delete(key) {
    localStorage.removeItem(key);
  },
  countFalseNum(key) {
    let count = new Number(0);
    let list = JSON.parse(localStorage.getItem(key));
    list.map(function (value, key) {
      if (value.checked == false) {
        count = count + 1;
      }
    })
  return count;
  },
  countTrueNum(key) {
    let count = new Number(0);
    let list = JSON.parse(localStorage.getItem(key));
    list.map(function (value, key) {
      if (value.checked == false) {
        count = count + 1;
      }
    })
  return count;
  }
}
export default app;