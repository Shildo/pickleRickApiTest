import { Text, View } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';

export function EpisodeScreen(){
    return (
      <View style={ viewStyles }>
        <Text style= { textStyles.text }>
          EPISODE
        </Text>
      </View>
    )
  }