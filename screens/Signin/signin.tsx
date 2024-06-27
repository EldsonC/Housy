import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import { style } from './styled';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from 'expo-linear-gradient';
import { Google } from 'assets/svg/google';
import { Apple } from 'assets/svg/apple';

SplashScreen.preventAutoHideAsync();

export default function SignIn() {
  const [fontsLoaded, fontsError] = useFonts({
    'Inter-SemiBold': require('../../assets/fonts/Inter/static/Inter-SemiBold.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter/static/Inter-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <View style={style.container} onLayout={onLayoutRootView}>
      <Image
        style={style.wave}
        source={require('../../assets/imgs/waves.png')}
      />
      <View style={style.Form}>
        <Image
          style={{ width: 142, height: 105.48, objectFit: "cover" }}
          source={require('../../assets/imgs/house.png')}
        />

        <Text style={style.h1Title}>Easily Control
          Your Home
        </Text>
        <Text style={style.paragraph}>Smart SmartHome is your simple
          all-in-one security, safety and smart
          home solution.
        </Text>

        <LinearGradient
          colors={["#8F40FB", "#E45DF7"]}
          start={{ x: 0.3, y: 0.10 }}
          style={style.buttonGrad}
        >
          <TouchableOpacity style={style.button}>
            <Google />
            <Text style={style.textButton}>Login With Google</Text>
          </TouchableOpacity>
        </LinearGradient>


        <TouchableOpacity style={[style.button, {
          backgroundColor: "#fff",
          marginTop: 17,
        }]}>
          <Apple/>
          <Text style={[style.textButton, { color: "#8F40FB" }]}>Login With Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
