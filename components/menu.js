import Hexagon from 'react-hexagon';
import { Box, Column, Text, Button} from 'gestalt';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase";
import firebaseApp from "./base";
import 'gestalt/dist/gestalt.css';

class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            displayName: null,
            photo: null,
            route: "Home"
        };
    }
    
    changeRoute = (route) => {
        this.setState({route: route})
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
        this.setState({ email: null, displayName: null, route: "Home"});
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
                <Box height="60vh">
                    {
                        (!this.state.email) ? 
                        <Box>
                            <Box paddingY={3} display="flex" alignContent="center" alignItems="center" justifyContent="center">
                                <Text weight="bold" align="center">WELLCOME TO CONTACTI <div className="X"><Hexagon style={{strokeWidth: 50, fill:"#0080ff", stroke: "#000000"}}/></div><div className="X"><Hexagon style={{strokeWidth: 50, fill:"#e50000", stroke: "#000000"}} /></div></Text>
                            </Box>
                            <FacebookLoginButton onClick={() => this.authenticate("Facebook")} className="button_login"/>
                            <GoogleLoginButton onClick={() => this.authenticate("Google")} className="button_login"/>
                            <Box paddingY={3}>
                                <Text align="center" color="gray">For more information: Please contact hexacon.app@gmail.com</Text>
                            </Box>
                        </Box> :
                        <div>
                            <Box paddingY={1} display="flex" alignContent="center" alignItems="center" justifyContent="center">
                                <Text weight="bold" align="center">CONTACTI <div className="X"><Hexagon style={{strokeWidth: 50, fill:"#0080ff", stroke: "#000000"}}/></div><div className="X"><Hexagon style={{strokeWidth: 50, fill:"#e50000", stroke: "#000000"}} /></div></Text>
                            </Box>

                            <Box display="flex" paddingY={3}>
                                <Column span={4}><Box color={this.state.route === "Home" ? "lightGray" : "white"} >
                                    <div onClick={e => this.changeRoute('Home')} className="tab"><Text align="center">Home</Text></div>
                                </Box></Column>
                                <Column span={4}><Box color={this.state.route === "Rank" ? "lightGray" : "white"} >
                                    <div onClick={e => this.changeRoute('Rank')} className="tab"><Text align="center">Rank</Text></div>
                                </Box></Column>
                                <Column span={4}><Box color={this.state.route === "Logout" ? "lightGray" : "white"} >
                                    <div onClick={e => this.changeRoute('Logout')} className="tab"><Text align="center">Logout</Text></div>
                                </Box></Column>
                            </Box>
                            
                            <Box display={this.state.route === "Home" ? "block" : "none"}>
                                <Box
                                    alignItems="center"
                                    direction="row"
                                    display="flex"
                                    paddingX={2}
                                    paddingY={1}
                                    color="lightGray"
                                    shape="rounded"
                                    margin={2}
                                    >
                                    <div className="avatar" paddingX={1}>
                                        <Hexagon backgroundImage={this.state.photo + "?type=large"} style={{strokeWidth: 20, stroke: "#999999"}}/>
                                    </div>
                                    <Box paddingX={1} marginLeft={3}>
                                        <Text weight="bold" truncate>{this.state.displayName}</Text>
                                        <Text truncate>joined 2 years ago</Text>
                                    </Box>
                                </Box>

                                <Box
                                    alignItems="center"
                                    direction="row"
                                    display="flex"
                                    paddingX={2}
                                    paddingY={1}
                                    color="lightGray"
                                    shape="rounded"
                                    margin={2}
                                    >
                                    <div className="avatar" paddingX={1}>
                                        <Hexagon backgroundImage={this.state.photo + "?type=large"} style={{strokeWidth: 20, stroke: "#999999"}}/>
                                    </div>
                                    <Box paddingX={1} marginLeft={3}>
                                        <Text weight="bold" truncate>{this.state.displayName}</Text>
                                        <Text truncate>joined 2 years ago</Text>
                                    </Box>
                                </Box>
                            </Box>

                            <Box display={this.state.route === "Logout" ? "block" : "none"}>
                                <Box padding={2}><Button color="blue" onClick={() => this.logout()} text="Logout"/></Box>
                                <Box padding={2}><Button color="red" onClick={() => this.logout()} text="Logout and remove all data"/></Box>
                                <Box paddingY={3}>
                                    <Text align="center" color="gray">For more information: Please contact hexacon.app@gmail.com</Text>
                                </Box>
                            </Box>
                        </div>
                    }
                </Box>
                <Box height="40vh" paddingX={2}>
                    <Text weight="bold" size="sm">Advertisement</Text>
                </Box>
            </Box>
        )
    }
}

export default Menu