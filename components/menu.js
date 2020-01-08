import Hexagon from 'react-hexagon';
import { Box, Column, Text } from 'gestalt';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Checkbox from '@material-ui/core/Checkbox';
import firebase from "firebase";
import firebaseApp from "./base";
import 'gestalt/dist/gestalt.css';

class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            displayName: null,
            photo: null
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
            displayName: user.displayName,
            photo: user.photoURL
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
        return (
            <Box height="100vh" overflow="hidden">
                <Box height="50vh">
                    {
                        (!this.state.email) ? 
                        <Box>
                            <FacebookLoginButton onClick={() => this.authenticate("Facebook")} className="button_login"/>
                            <GoogleLoginButton onClick={() => this.authenticate("Google")} className="button_login"/>
                            <Box>
                            <Checkbox
                                defaultChecked
                                value="secondary"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            </Box>
                        </Box> :
                        <div>
                            <button onClick={() => this.logout()}>Logout</button>
                            <Box>{this.state.displayName}</Box>
                            <img src={this.state.photo + "?type=large"}/>
                        </div>
                    }
                </Box>
                <Box height="50vh" paddingX={2}>
                    <Text weight="bold">Advertisement</Text>
                </Box>
            </Box>
        )
    }
}

export default Menu