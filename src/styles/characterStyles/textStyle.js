import { StyleSheet } from "react-native";

export const textStyle = StyleSheet.create ({
    titleText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
    },
    nameText: {
        color: 'white',
        fontWeight: "bold",
        marginLeft: '5%',
        marginTop: '5%',
    },
    speciesText: {
        flex: 1,
        color: 'white',
        marginLeft: '5%',
        fontSize: 12,
    },
    statusText: {
        color: 'white',
        fontSize: 10,
        alignSelf: "flex-end",
        marginRight: '15%',
        marginBottom: '5%',
    },
});