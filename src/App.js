import React  from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Routes} from "./Routes";
import "antd/dist/antd.css";

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    {Routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                component={route.component}
                                exact={route.isExact}
                            />
                        )
                    })}
                </Switch>
            </Router>
        </>
    );
};

export default App;
