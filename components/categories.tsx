import React, { useState } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

const Categories = () => {
    const categoriesInfo = ['ទាំងអស់', 'មេរៀន', 'វីដេអូ', 'សំឡេង', 'អត្ថបទ'];
    const [selectedCategory, setSelectedCategory] = useState<string>(categoriesInfo[0]);

    return (
        <View>
            {categoriesInfo.map((item) => (
                <TouchableOpacity key={item} onPress={() => setSelectedCategory(item)}>
                    <View style={{ padding: 10, backgroundColor: selectedCategory === item ? 'blue' : 'white' }}>
                        <Text style={{ color: selectedCategory === item ? 'white' : 'black' }}>{item}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Categories;