import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [ loaded, error ] = useFonts({
    "ManufacturingConsent-Regular" :
    require("../assets/fonts/ManufacturingConsent-Regular.ttf")

  })

  useEffect(() => {
    if(loaded || error == null){
      SplashScreen.hideAsync();
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null; // or a loading indicator
  }

  return <Stack />;
}
