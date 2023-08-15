import { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';
import { flatListStyle } from '../styles/flatListStyle';
import { imageStyle } from '../styles/imageStyle';

const apiURL = 'https://rickandmortyapi.com/api/character/';

const RenderList = ({ item }) => {

  let color = item.status === 'Dead' ? 'red' 
    : item.status === 'Alive' ? 'green' : 'yellow';


  return (
    <View style={ viewStyles.cardContainer } key={ item.key }>
      <View>
        <Image style={ imageStyle.cardImage } 
            source={{ uri: item.image }}
        />
      </View>
      <Text style={ textStyles.nameText }>
        { item.name } 
      </Text>
      <Text style={ textStyles.speciesText }>
        {item.species}
      </Text>
      <Text style={ textStyles.statusText }>
        { item.status } { ' ' }
        <View style={{ 
          backgroundColor: color, 
          width: 10, 
          height: 10, 
          borderRadius: 50, 
        }}/>
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
            ListHeaderComponent={
              <View style={ viewStyles.titleView }>
                <Text style={ textStyles.titleText }>Rick & Morty</Text>
                <Text style={ textStyles.titleText }>API test</Text>
              </View>
            }
            contentContainerStyle={ flatListStyle.container }
            style={{ flex: 1 }}
            numColumns={ 2 }
            data={ data }
            renderItem={({ item }) =>  <RenderList item={ item }/>} 
          />
        </View>
    )
}
