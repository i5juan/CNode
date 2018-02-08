import React, {
    Component
} from "react";
import {
    StackNavigator
} from "react-navigation";
import Tabs from "./tab" ;
import Topic from "./screen/Topic" ;
import SkinPicker from "./screen/SkinPicker";
import User from "./screen/User" ;
import {
    observer,
    inject
} from "mobx-react/native" ;
import SplashScreen from 'react-native-splash-screen';
import {
    Root
} from "native-base";
@inject("common")
@observer
export default class StackScreen extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    getStackScreen() {
        const {theme} = this.props.common;
        return StackNavigator({
            Home: {screen: Tabs(theme)},
            Topic:{screen: Topic},
            SkinPicker:{screen:SkinPicker},
            User:{screen:User}
        })
    }

    render() {
        const Stack = this.getStackScreen();
        return (
            <Root>
                <Stack/>
            </Root>
        )
    }
}