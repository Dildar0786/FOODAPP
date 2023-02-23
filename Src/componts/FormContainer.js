import React from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { globalStyle } from '../../constent/GlobelStyle';

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const FormContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
}) => {
    return (
        <View
            style={{
                flex: 1,
                
                // ...globalStyle.container(backgroundColor) 
                
            }}>
            <KeyboardAvoidingView
                // style={globalStyle.container(backgroundColor)}
                behavior={behavior}>
                <ScrollView>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default FormContainer;