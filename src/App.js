import React from 'react';
import './App.css';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, HashRouter, Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="wrapper">

                <HeaderContainer />

                <Navbar />
                <div className="wrapper__content">
                    <Route path='/news' component={News} />
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/users'
                        render={() =>
                            <UsersContainer />} />
                    <Route path='/login' render={() => <LoginContainer />} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

let AppComponent = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>

                <AppContainer />

            </Provider>
        </HashRouter>
    )
};

export default AppComponent;
