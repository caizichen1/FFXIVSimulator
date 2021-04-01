/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-04-01 15:18:22
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-01 16:29:32
 */

let r = ''
let goLeft = null
let goTop = null
let goRight = null
let goBottom = null

export function keyboardTools(role) {
  r = role
  document.addEventListener("keydown",keydown);
  document.addEventListener("keypress",keypress);
  document.addEventListener("keyup",keyup);
}

/**
 * @description: 摁下键键盘事件
 * @param {*} e
 * @return {*}
 */
const keydown = (e) => {
  const role = document.getElementsByClassName(r)[0]
  const keycode = e.keyCode

  // 摁下方向键
  switch(keycode) {
    case 37: {
      if (!goLeft) {
        goLeft = setInterval(() => {
          const left = parseInt(role.style.left.split('px')[0]) - 2;
          role.style.left = `${left}px`
        }, 20);
      }
      break;
    }
    case 38: {
      if (!goTop) {
        goTop = setInterval(() => {
          const top = parseInt(role.style.top.split('px')[0]) - 2;
          role.style.top = `${top}px`
        }, 20);
      }
      break;
    }
    case 39: {
      if (!goRight) {
        goRight = setInterval(() => {
          const left = parseInt(role.style.left.split('px')[0]) + 2;
          role.style.left = `${left}px`
        }, 20);
      }
      break;
    }
    case 40: {
      if (!goBottom) {
        goBottom = setInterval(() => {
          const top = parseInt(role.style.top.split('px')[0]) + 2;
          role.style.top = `${top}px`
        }, 20);
      }
      break;
    }
    default: {
      break
    }
  }
}

const keypress = (e) => {
  console.log(1)
}

/**
 * @description: 松开键盘事件
 * @param {*} e
 * @return {*}
 */
const keyup = (e) => {
  const keycode = e.keyCode

  // 松开方向键
  switch(keycode) {
    case 37: {
      clearInterval(goLeft)
      goLeft = null
      break;
    }
    case 38: {
      clearInterval(goTop)
      goTop = null
      break;
    }
    case 39: {
      clearInterval(goRight)
      goRight =  null
      break;
    }
    case 40: {
      clearInterval(goBottom)
      goBottom = null
      break;
    }
    default: {
      break
    }
  }
}