import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/Layout/MainNavigation";
import Layout from "./components/Layout/Layout";
function App() {
    return (
        <Layout>
            <Switch>
                {" "}
                {/*This lets only one route run. Otherwise all url matches would display */}
                <Route path="/" exact={true}>
                    {" "}
                    {/* Excact means that only this excact route will run. This creates a route. By defualt matches all routes with the url address  */}
                    <AllMeetups />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetup />
                </Route>
                <Route path="/favourites">
                    <Favourites />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
