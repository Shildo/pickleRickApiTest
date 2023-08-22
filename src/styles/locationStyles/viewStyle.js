import { StyleSheet } from "react-native"

export const viewStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2531',
        paddingHorizontal: 15,
    },
    cardContainer: {
        height: 55,
        width: '100%',
        backgroundColor: '#434B5B',
        borderRadius: 15,
        marginBottom: '4%',
        elevation: 3,
        display: "flex",
        padding: '2%',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    nameAndDimensionText: {
        marginLeft: '2%',
    }
});