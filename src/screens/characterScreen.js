import { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';
import { flatListStyle } from '../styles/flatListStyle';
import { imageStyle } from '../styles/imageStyle';

const apiURL = 'https://rickandmortyapi.com/api/character/?page=1';

const RenderList = ({ item }) => {
    let color = item.status === 'Dead' ? 'red' 
        : item.status === 'Alive' ? 'green' : 'yellow';

    return (
        <View style={ viewStyles.cardContainer } key={ item.key }>
            <Image style={ imageStyle.cardImage } 
                source={{ uri: item.image }}
            />
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
    const [next, setNext] = useState([]);
  
    try {
        useEffect(() => {
        fetch(apiURL,{
            method: 'GET',
        })
        .then(res => res.json())
        .then(res => {
            setData(res.results);
            setNext(res.info.next);
        })
        }, [])
    }  catch(error){
        console.log(error);
    }
    
    const handleOnEndReached = () => {
        if (next != null){
            try {
                fetch(next,{
                method: 'GET',
                })
                .then(res => res.json())
                .then(res => {
                    setData([...data, ...res.results])
                    if (next != null){
                        setNext(res.info.next);
                    }
                })
            } catch(error){
                console.log(error);
            } 
        }
        return;
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
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={0.5}
        />
        </View>
    )
}
