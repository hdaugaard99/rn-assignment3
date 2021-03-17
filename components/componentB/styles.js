import {StyleSheet} from 'react-native';

export const Colors = {
    dark: 'black',
    light: 'white',
    pink: '#FBCAEF',
    magenta: '#c64191',
    purple: '#9381FF',
    mint: '#D2F1E4',
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150,
};


const lightStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 150,
        width: 150, 
        borderColor: Colors.dark,
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
        color: Colors.dark,
    },
});

const darkStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 150,
        width: 150,
        borderColor: Colors.light,
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
        color: Colors.light,
    },
});

const pinkStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.pink,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 150,
        width: 150,
        borderColor: Colors.purple,
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
        color: Colors.purple,
    },
});

const mintStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.mint,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: 150,
        width: 150,
        borderColor: Colors.magenta,
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25,
        color: Colors.magenta,
    },
});

export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}

export {darkStyleSheet, lightStyleSheet, pinkStyleSheet, mintStyleSheet};