import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme/index'
import Carousel from 'react-native-snap-carousel';
import { categories, coffeeItems } from '../constants'
import CoffeeCard from '../components/CoffeeCard'

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(1)
    return (
        <View className="flex-1 relative bg-white">
            <StatusBar style="dark" hidden={true} />

            <Image
                source={require('../assets/images/beansBackground1.png')}
                className="w-full absolute -top-5 opacity-10 h-[220px]"
            />
            <SafeAreaView className="flex-1">
                {/** Avatar and Bell Icon -- Begin*/}
                <View className="px-4 mt-3 flex-row justify-between items-center">
                    <Image
                        source={require('../assets/images/avatar.png')}
                        className="h-9 w-9 rounded-full"
                    />

                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon size={25} color={themeColors.bgLight} />
                        <Text className="text-base font-semibold">
                            BLACK IV COFFEE
                        </Text>
                    </View>

                    <BellIcon size={27} color={"#000000"} />
                </View>

                {/**Avatar and Bell Icon -- End*/}

                {/** Search Bar -- Begin */}
                <View className="mx-5 mt-14">
                    <View className="flex-row justify-center items-center rounded-full bg-[#E6E6E6] p-1">
                        <TextInput
                            placeholder='Search'
                            className="p-4 flex-1 font-semibold text-gray-700"
                        />

                        <TouchableOpacity
                            className="rounded-full p-2"
                            style={styles.searchIcon}
                        >
                            <MagnifyingGlassIcon size={25} strokeWidth={2} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/** Search Bar -- End */}

                {/** Categories --Begin */}
                <View className="px-5 mt-6">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        className="overflow-visible"
                        renderItem={ ({ item }) => {
                            let isActive = item.id == activeCategory;
                            let activeTextClass = isActive ? 'text-white' : 'text-gray-800'
                            return (
                            <TouchableOpacity
                                className= "p-4 px-5 mr-2 rounded-full"
                                onPress={() => setActiveCategory(item.id)}
                                style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)'}}
                            >
                                <Text className={"font-semibold " + activeTextClass}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>)

                        }}
                    />

                </View>
                {/** Categories --End */}

                {/** Coffee cards --Begin */}
                <View className="mt-16 p-2">
                <Carousel 
                    loop={true}
                    containerCustomStyle={{overflow: "visible"}}
                    data={coffeeItems}
                    renderItem={
                        ({item}) => <CoffeeCard item={{item}} />
                    }
                    firstItem={1}
                    inactiveSlideOpacity={0.75}
                    inactiveSlideScale={0.77}
                    sliderWidth={400}
                    itemWidth={260}
                    slideStyle={{display: "flex", alignItems: "center"}}
                />
                </View>

                {/** Coffee cards --End */}

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchIcon: {
        backgroundColor: themeColors.bgLight,
    },
});