import { Text, View } from 'react-native';
import { viewStyles } from '../styles/viewStyle';
import { textStyles } from '../styles/textStyle';

export function LocationScreen() {
    return (
      <View style={ viewStyles }>
        <Text style= { textStyles.text }>
          LOCATION
        </Text>
      </View>
    )
  }