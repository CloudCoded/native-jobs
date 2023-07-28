import { useState } from 'react'
import { View, ScrollView, FlatList, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components';
console.reportErrorsAsExceptions = false;

const Home = () => {
    const route = useRouter();
    return (
      
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
              options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                // headerLeft: () =>(
                //     <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                // ),
                // headerRight: () =>(
                //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                // ),
                headerTitle: ""
              }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    padding: SIZES.large
                  }}
                >
                    <Welcome
                    
                    />
                    {/* <Popularjobs />
                    <Nearbyjobs /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
      
    )
}

export default Home;