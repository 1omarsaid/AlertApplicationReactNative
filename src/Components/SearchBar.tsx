import * as React from 'react';
import { View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type SearchBarProps = {
  filter: (text: string) => void,
  placeholder?: string
};

export const SearchBar = (props: SearchBarProps) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1, borderRadius: 10 }}>
    <View style={{ marginLeft: 10 }}>
    </View>
    <TextInput placeholder={props.placeholder || 'Try searching "Toronto"'} style={{ paddingLeft: 10, paddingRight: 10, height: 40, width: '90%' }} onChangeText={props.filter} />
  </View>
);
