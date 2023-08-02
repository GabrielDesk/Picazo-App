import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import { COLORS } from '../../../constants/Colors';
import { Appearance } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [SafeAreaViewStyle, setSafeAreaViewStyle] = useState({});
  const [BluetoothDevices, setBluetoothDevices] = useState([
    {
      name: 'Carlos',
      id: 1919,
    },
    {
      name: 'Carlos',
      id: 1919,
    },
    {
      name: 'Carlos',
      id: 1919,
    },
  ]);

  useEffect(() => {
    return () => {
      const colorScheme = Appearance.getColorScheme();

      if (colorScheme === 'dark') {
        setSafeAreaViewStyle({
          height: '100%',
          backgroundColor: '#FFFFFF',
          paddingVertical: '5%',
        });
      }
    };
  }, []);

  const RenderDeviceList = (item) => (
    <View
      style={{
        // width: '50%',
        // height: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: '#000',
        }}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={SafeAreaViewStyle} forceInset={{ top: 'always' }}>
      <View
        style={{
          padding: '5%',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
        }}
      >
        <View
          onPress={() => null}
          style={{
            height: 250,
            width: '100%',
          }}
        >
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={{
              uri: 'https://img.freepik.com/vetores-gratis/elementos-do-painel-em-estilo-gradiente_23-2148372635.jpg?w=996&t=st=1690672729~exp=1690673329~hmac=8eb2135432fe5be70be3706e361f6571f14db2d69ab1580418eb2690a74ac248.jpg',
            }}
            alt="image"
          />
        </View>

        {/* <FlatList
            data={BluetoothDevices}
            renderItem={({ item }) => RenderDeviceList(item)}
          /> */}
      </View>
    </SafeAreaView>
  );
};
