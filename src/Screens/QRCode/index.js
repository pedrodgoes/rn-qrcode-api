import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScreen extends Component{

    ifScaned = e=>{
        Linking.openUrl(e.data).catch(err=> Alert.alert('Invalid QRCode', e.data))
    }

    render(){
        return(
            <QRCodeScanner
            containerStyle={{backgroundColor: '#fff'}}
            onRead={this.ifScaned}
            reactivate={true}
            permissionDiaLogMessage="Acesso a câmera negado"
            reactivateTimeout={10}
            showMarker={true}
            markerStyle={{borderColor: "#fff", borderRadius: 10}}
            bottomContent={
                <TouchableOpacity>
                    <Text>Scanear QRCode</Text>
                </TouchableOpacity>
            }/>
        )
    }
}

AppRegistry.registerComponent('testeSamel', () => QRCodeScreen);
