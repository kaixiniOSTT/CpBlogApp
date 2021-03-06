/**
 *创建时间:  2018/6/13
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */

import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        position: 'relative'
    },
    background_image:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    background_color: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    btnStyle: {
        height: 40,
        width: Dimensions.get('window').width,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.4)',
        justifyContent: 'center',
    },
    exitText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
    }
})
module.exports = styles;