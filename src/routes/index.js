import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../page/home/index'
import Login from '../page/login/index'
import FromModel from '../page/fromModel/index'
import FromModel2 from '../page/fromModel2/index'
import ShuttleBar from '../page/shuttleBar/index'
import ShuttleBar2 from '../page/shuttleBar2/index'
import TableModel from '../page/tableModel/index'
import ECharts from '../page/eCharts/index'
import TableModelj from '../page/tableModelJ/index'
import AntOne from '../page/Antv/index'
import AntTwo from '../page/Antv/index_two'
import AntThree from '../page/Antv/index_three'
import AntFour from '../page/Antv/index_four'
import AntFive from '../page/Antv/index_five'
import AntSix from '../page/Antv/index_six'
import OrJs from '../page/orJs/index'
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/fromModel' component={FromModel} />
                <Route path='/fromModel2' component={FromModel2} />
                <Route path='/orJs' component={OrJs} />
                <Route path='/shuttleBar' component={ShuttleBar} />
                <Route path='/shuttleBar2' component={ShuttleBar2} />
                <Route path='/tableModel' component={TableModel} />
                <Route path='/eCharts' component={ECharts} />
                <Route path='/tableModelJ' component={TableModelj} />
                <Route path='/antOne' component={AntOne} />
                <Route path='/antTwo' component={AntTwo} />
                <Route path='/antThree' component={AntThree} />
                <Route path='/antFour' component={AntFour} />
                <Route path='/antFive' component={AntFive} />
                <Route path='/antSix' component={AntSix} />
            </Switch>
        </Router>
    );
}
export default App