import React from 'react';
import Styles from '@styles/styles';
import { BLACK } from '@styles/colors';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  label: string
  right?: any
  disabled?: boolean
  onPress: () => void
}

const SelectItem: React.FC<Props> = (props) => {
  return <TouchableOpacity
    disabled={props.disabled}
    onPress={props.onPress}
    style={{ ...Styles.Common.input }}>
    <View style={{ flex: 1, flexDirection: 'row', }}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{
          color: BLACK,
          fontSize: 18,
          paddingLeft: 15
        }}>{props.label}</Text>
      </View>
      {props.right && <View style={{ marginLeft: 'auto', justifyContent: 'center' }}>
        {props.right}
      </View>}
    </View>

  </TouchableOpacity>
}
export default SelectItem