import { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { viewStyle } from '../styles/locationStyles/viewStyle';
import { flatListStyle } from '../styles/locationStyles/flatListStyle';
import { textStyle } from '../styles/locationStyles/textStyle';

const apiURL = 'https://rickandmortyapi.com/api/location?page=1';

const RenderList = ({ item }) => {

    if (item.name.length > 18){
        item.name = item.name.substring(0,18)+'...';
    }
    if (item.dimension.length > 18){
        item.dimension = item.dimension.substring(0,18)+'...';
    }

    return (
        <View style={ viewStyle.cardContainer }>
            <View style={ viewStyle.nameAndDimensionText }>
                <Text style={ textStyle.nameText }>
                    { item.name }
                </Text>
                <Text style={ textStyle.dimensionText }>
                    { item.dimension }
                </Text>
            </View>
            <Text style={ textStyle.residentText }>
                Residents: <Text style={ textStyle.populationNumberText }> { item.residents.length } </Text>
            </Text>
        </View>
    );
}

export function LocationScreen(){
    
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
                ListHeaderComponent={<Text style={textStyle.titleText}>Locations</Text>}
                ListHeaderComponentStyle={{marginBottom: '20%', alignItems: 'center'}}
                contentContainerStyle={ flatListStyle.container }
                showsVerticalScrollIndicator={ false }
                style={{ flex: 1 }}
                numColumns={ 1 }
                data={ data }
                renderItem={({ item }) =>  <RenderList item={ item }/>} 
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}