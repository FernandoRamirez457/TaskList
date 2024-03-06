import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useIsMobile from './mobile';

const Task = ({ title_task, photoUrl, descript, time, color }) => {
    const isMobile = useIsMobile()

    let phototask;

    if (photoUrl === './imgs/img_estudar.jpg') {
        phototask = require('./imgs/img_estudar.jpg');
    } else if (photoUrl === './imgs/img_etec.png') {
        phototask = require('./imgs/img_etec.png');
    } else if (photoUrl === './imgs/img_jogar.jpg') {
        phototask = require('./imgs/img_jogar.jpg');
    } else if (photoUrl === './imgs/img_ds.jpg') {
        phototask = require('./imgs/img_ds.jpg');
    } else if (photoUrl === './imgs/img_refeicao.png') {
        phototask = require('./imgs/img_refeicao.png');
    } else if (photoUrl === './imgs/img_dormir.jpg') {
        phototask = require('./imgs/img_dormir.jpg');
    } else {
        // Default image if none of the conditions match
        phototask = require('./imgs/img_estudar.jpg');
    }

    return (
        <View style={[styles.container, isMobile && stylesMobile.container]}>
            <Image source={phototask} style={[styles.photo, isMobile && stylesMobile.photo]} />

            <View style={[styles.container_task_info, isMobile && stylesMobile.container_task_info]}>
                <Text style={[styles.title, styles.title_task, { color: color }]}>{title_task}</Text>
                <Text style={[styles.descript, isMobile && stylesMobile.descript]}>{descript}</Text>
            </View>

            <View style={[styles.container_time, isMobile && stylesMobile.container_time]}>
                <Text style={[styles.title, isMobile && stylesMobile.title]}>Tempo Investido:</Text>
                <Text style={[styles.time, isMobile && stylesMobile.time]}>{time}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 20,
        backgroundColor: '#FAFAFA',
        maxWidth: 560,
        height: 150,
        gap: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    photo: {
        width: 130,
        height: 130,
        borderRadius: 5,
    },
    container_task_info: {
        maxWidth: 240,
        height: 130,
        gap: 10
    },
    descript: {
        fontSize: 13,
        textAlign: 'justify'
    },
    container_time: {
        maxWidth: 150,
        height: 130,
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title_task: {
        fontSize: 20
    },
    time: {
        fontSize: 34,
        fontWeight: 'bold'
    },
});

const stylesMobile = StyleSheet.create({
    container: {
        margin: 5,
        width: 360,
        height: 140,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 5,
    },
    container_task_info: {
        width: 150,
        height: 110,
        gap: 5,
    },
    descript: {
        fontSize: 11,
        textAlign: 'justify'
    },
    container_time: {
        width: 80,
        height: 110,
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    title_task: {
        fontSize: 18
    },
    time: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default Task;
