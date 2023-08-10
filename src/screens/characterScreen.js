import { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';

const apiURL = 'https://rickandmortyapi.com/api/character/';

const RenderList = ({ item }) => {
    return (
      <View style={viewStyles.container}>
        <Text style={textStyles.text}>
          {item.id} {item.name}
        </Text>
      </View>
    );
  };

export function CharacterScreen(){
    
    const [data, setData] = useState([]);  
    try {
      useEffect(() => {
        fetch(apiURL,{
            method: 'GET',
        })
        .then(response => response.json())
        .then(json => {setData(json.results)})
      }, [])
    }  catch(error){
      console.log(error);
    }
    

    return (
        <View style={ viewStyles.container }>
          <FlatList 
            numColumns={2}
            data={data}
            renderItem={({ item }) =>  <RenderList item={ item }/>} 
          />
        </View>
    )
}
