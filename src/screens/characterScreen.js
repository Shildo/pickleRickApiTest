import { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';

const apiURL = 'https://rickandmortyapi.com/api/character/';

const renderList = ({ item }) => {
    return (
      <View style={viewStyles.container}>
        <Text style={textStyles.text}>{item.id} {item.name}</Text>
      </View>
    );
  };


export function CharacterScreen(){
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(apiURL,{
            method: 'GET',
        })
        .then(response => response.json())
        .then(json => {setData(json.results)})
    }, [])


    return (
        <View style={ viewStyles.container }>
                <FlatList 
                    data={data}
                    renderItem={renderList}
                />
        </View>
    )
}
