import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useEffect, useState, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  Accuracy,
  LocationAccuracy
} from 'expo-location'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';





export default function App() {
  const [location, setLocation] = useState(null)
  const mapRef = useRef(null)

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
      console.log("Localização atual: ", currentPosition)
    }
  }
  useEffect(() => {
    requestLocationPermissions();
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    },
      (response) => {
        console.log("Nova localização", response)
        setLocation(response)
        // mapRef.current?.animateCamera({
        //   pitch: 70, //angulo da visualização do mapa
        //   // center: response.coords //manter centralizado
        // })
      });
  }, []);

  return (
    <View style={styles.container}>

      {location &&
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
          }
        >
          < Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }} />
        </MapView>



      }
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%'
  }
});


