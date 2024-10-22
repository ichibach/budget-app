import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        borderColor: '#F2F2F4',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between'
        alignItems: 'center',
        padding: 10
        // flex: 1,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4F3F0',
        borderRadius: 5,
        height: 40,
        width: 40
    },
    content: {
        marginLeft: 10,
        flexDirection: 'column',
        overflow: 'hidden'
    },
    title: {},
    amount: {}
});
