import { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { viewStyle } from '../styles/characterStyles/viewStyle';
import { textStyle } from '../styles/characterStyles/textStyle';
import { flatListStyle } from '../styles/characterStyles/flatListStyle';
import { imageStyle } from '../styles/characterStyles/imageStyle';

const apiURL = 'https://rickandmortyapi.com/api/character/?page=1';

const RenderList = ({ item }) => {
    let color = item.status === 'Dead' ? 'red' 
        : item.status === 'Alive' ? 'green' : 'yellow';

    return (
        <View style={ viewStyle.cardContainer } key={ item.key }>
            <Image style={ imageStyle.cardImage } 
                source={{ uri: item.image }}
            />
            <Text style={ textStyle.nameText }>
                { item.name } 
            </Text>
            <Text style={ textStyle.speciesText }>
                {item.species}
            </Text>
            <Text style={ textStyle.statusText }>
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
    const [first, setFirst] = useState([]);
  
    try {
        useEffect(() => {
            fetch(apiURL,{
            method: 'GET',
            })
            .then(res => res.json())
            .then(res => {
                setData(res.results);
                setNext(res.info.next);
                setFirst(false);
            })
        }, [])
    }  catch(error){
        console.log(error);
    }
    
    const handleOnEndReached = () => {
        if (!first){
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
        }
        return;
    }

    return (        
        <View style={ viewStyle.container }>
            <FlatList
                ListHeaderComponent={
                <View>
                    <Text style={ textStyle.titleText }>Rick & Morty</Text>
                    <Text style={ textStyle.titleText }>API test</Text>
                </View>
                }
                ListHeaderComponentStyle={{ marginBottom: '10%' }}
                contentContainerStyle={ flatListStyle.container }
                showsVerticalScrollIndicator={ false }
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
