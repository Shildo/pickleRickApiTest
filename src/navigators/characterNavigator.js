import { Text, View } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';

export function CharacterScreen() {
    return (
        <View style={ viewStyles }>
         <Text style={ textStyles.text }>
           CHARACTER
         </Text>
        </View>
    )
  }