import { StyleSheet, Text, View, Touchable, Image } from 'react-native';

export default function Card(title, body) {
    return(
        <View style={styles.card}>
            <Image style={styles.cardImage}/>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {

        // Apply styling to the card
        backgroundColor: 'rgba(255, 255, 255, 0.023)',
        borderRadius: 30,

        width: '90%',
        height: '50%',
    },

    cardImage: {

        position: 'relative',
        top: 0,
        width: '100%',
        height: '50%'
    },

    cardTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },

    cardBody: {
        fontSize: 10,
        color: 'white',
    }
});