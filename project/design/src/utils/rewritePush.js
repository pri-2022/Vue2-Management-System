import VueRouter from 'vue-router'

// 编程式导航多次传递同一参数，抛出 NavigationDuplicated 错误，重写 push | replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// location，目标地址与传递参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default VueRouter