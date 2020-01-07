import Hexagon from 'react-hexagon';
import { Box, Column } from 'gestalt';
import firebase from "firebase";
import firebaseApp from "./base";
import 'gestalt/dist/gestalt.css';

class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            displayName: null
        };
    }
    //xác thực theo provider
    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
    };
    
    //xử lý sau khi xác thực
    authHandler = async authData => {
        const user = authData.user;
        console.log(user)
        this.setState({
            email: user.email,
            displayName: user.displayName
        });
    };
    
    //đăng xuất
    logout = async () => {
        await firebase.auth().signOut();
        this.setState({ email: null, displayName: null });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.authHandler({ user });
          }
        });
    }

    render() {
        if (!this.state.email) {
            return <button onClick={() => this.authenticate("Facebook")}>Facebook</button>
        }
        return (
            <Box>
                <button onClick={() => this.logout()}>Logout</button>
                <Box>{this.state.displayName}</Box>
                <Box>{this.state.email}</Box>
            </Box>
        )
    }
}

export default Menu