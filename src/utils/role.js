/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-04-01 15:54:20
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-01 16:06:44
 */

 export function initRolePosition(posX = 500,posY = 500) {
  const role = document.getElementsByClassName('role');
  for (let index = 0; index < role.length; index++) {
    role[index].style.left =`${posX}px`;
    role[index].style.top = `${posY}px`;
  }
 }