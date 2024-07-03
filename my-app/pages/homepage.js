import React from 'react';
import { View } from 'react-native';
import Homeheader from '../components/homeheader';
import Homesubheader from '../components/homesubheader';
import Homecards from '../components/homecards';


export default function Homepage() {
    return (
        <View>
            <Homeheader />
            <Homesubheader />
            <Homecards />
        </View>
    );
}