/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-03-31 16:19:02
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-01 15:12:25
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routers from './routers/index';
class App extends React.Component {

  generateRoute = router => {
    const finalRoutes = router.map(item => {
      const { path, component } = item;
      console.log(path)
      return (
        <Route key={path} path={path} component={component} exact></Route>
      );
    });
    return finalRoutes;
  };

  componentDidMount() {
    console.log(this.generateRoute(routers))
  }

  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            { this.generateRoute(routers) }
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
