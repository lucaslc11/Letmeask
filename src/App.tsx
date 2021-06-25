import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './page/Home';
import { NewRoom } from './page/NewRoom';
import { Room } from './page/Room';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
        <AuthContextProvider>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/rooms/new" component={NewRoom}/>
                <Route path="/rooms/:id" component={Room}/>
            </Switch>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
