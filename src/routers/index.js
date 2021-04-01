/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-03-31 16:19:02
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-01 15:12:11
 */
import Loadable from 'react-loadable';

const page = component => {
  return Loadable({
    loader: () => import(`./../pages/${component}/index.jsx`),
    loading() {
      return <div>Loading...</div>
    }
  })
};

const routes = [
  // 默认路由
  { path: '/', component: page('index') },
  { path: '/index', component: page('index') },
  { path: '/simpleton', component: page('simpleton') },
];

export default routes;