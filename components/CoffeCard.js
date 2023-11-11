import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { themeColors } from '../theme';
import React from 'react'
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';


export default function CoffeeCard({ item }) {
    

    return (
        <View style={styles.coffeeCardContainer}>

            <View
                style={styles.coffeeCardImageView}
                className="flex-row justify-center -mt-[20%]"
            >
                <Image
                    source={item.image}
                    className="h-40 w-40"
                />
            </View>

            <View className="px-5 mt-5 space-y-3">
                <Text className="font-semibold text-3xl text-white z-10">
                    {item.name}
                </Text>

                <View 
                    style={styles.starIconView}
                    className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
                >
                    <StarIcon size={16} color="white" />
                    <Text className="text-base font-semibold text-white">
                        {item.stars}
                    </Text>
                </View>
                
                <View className="flex-row space-x-1 z-10 mb-6">
                    <Text className="text-base text-white font-semibold opacity-60">Volume</Text>
                    <Text className="text-base text-white font-semibold">{item.volume}</Text>
                </View>

                <View 
                    style={styles.pricePlusIcon}
                    className="flex-row justify-between items-center"
                >
                    <Text className="text-white text-lg font-bold">
                        Ksh {item.price}
                    </Text>

                    <TouchableOpacity
                         
                        style={styles.plusIcon}
                        className="bg-white rounded-full p-4">
                        <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} />
                    </TouchableOpacity>

                </View>

            </View>

        </View>

        
    )
}

const styles = StyleSheet.create({
    coffeeCardContainer: {
        backgroundColor: themeColors.bgDark,
        borderRadius: 35,
        height: "76%",
        width: "100%",

    },

    coffeeCardImageView: {
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: .8
    },

    starIconView: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },

    

    plusIcon: {
        shadowColor: "#000000",
        shadowRadius: 20,
        shadowOffset: { width: -10, height: -5 },
        shadowOpacity: 1
    }
});