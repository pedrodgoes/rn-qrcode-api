import React, { useState, useEffect, Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

import api from '../../services/api';
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: [],
            title: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                })
            })
    }

    _renderItem({ item, index }) {
        return (
            <TouchableOpacity onPress={() => alert(item.body)}>
                <View style={styles.item}>
                    <Text>{item.id + " - " + item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    handleTitle = (event) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title=${this.state.title}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    dataSource: data
                })
            })
    }
    render() {

        const { dataSource, isLoading, title } = this.state

        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' animating color='yellow' />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <TextInput style={styles.input}
                        placeholder="Buscar Título"
                        value=''
                        onChangeText={title => { this.state.setState({ title }) }}
                    />

                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={this.handleTitle}
                            title="Buscar">
                            <Text>Buscar</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 40,
        paddingBottom: 5,
    },
    item: {
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: 'purple'
    },
    input: {
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'purple',
        marginVertical: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 3,

    }
})