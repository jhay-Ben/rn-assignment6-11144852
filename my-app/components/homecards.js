import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const Homecards = () => {
    const cards = [
        { id: '1', title: 'Office Wear', subtitle: 'reversible angora cardigan', amount: '$120', logo: require('../assets/dress1.png'), add: require('../assets/add_circle.png') },
        { id: '2', title: 'Black', subtitle: 'reversible angora cardigan', amount: '$120', logo: require('../assets/dress2.png'), add: require('../assets/add_circle.png') },
        { id: '3', title: 'Church Wear', subtitle: 'reversible angora cardigan', amount: '$120', logo: require('../assets/dress3.png'), add: require('../assets/add_circle.png') },
        { id: '4', title: 'Lamerei', subtitle: 'reversible angora cardigan', amount: '$120', logo: require('../assets/dress4.png'), add: require('../assets/add_circle.png') },
        { id: '5', title: '21WN', subtitle: 'eversible angora cardigan', amount: '$120', logo: require('../assets/dress5.png'), add: require('../assets/add_circle.png') },
        { id: '6', title: 'Lopo', subtitle: 'eversible angora cardigan', amount: '$120', logo: require('../assets/dress6.png'), add: require('../assets/add_circle.png') },
        { id: '7', title: '21WN', subtitle: 'eversible angora cardigan', amount: '$120', logo: require('../assets/dress7.png'), add: require('../assets/add_circle.png') },
        { id: '8', title: 'Lamerei', subtitle: 'eversible angora cardigan', amount: '$120', logo: require('../assets/dress3.png'), add: require('../assets/add_circle.png') },
        { id: '9', title: 'Lopo', subtitle: 'eversible angora cardigan', amount: '$120', logo: require('../assets/dress6.png'), add: require('../assets/add_circle.png') },
        
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}  showsVerticalScrollIndicator={false}>
            {cards.map(item => (
                <View key={item.id} style={styles.card}>
                    <Image source={item.logo} style={styles.image} />
                    <TouchableOpacity>
                    <Image source={item.add} style={styles.add} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                    <Text style={styles.amount}>{item.amount}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 2,
    },
    image: {
        
        width: 150,
        height: 200,
        marginBottom: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    add: {
      marginTop: -40,
      marginLeft: 120,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    amount: {
        fontSize: 14,
        color: '#f00',
    },
});

export default Homecards;
