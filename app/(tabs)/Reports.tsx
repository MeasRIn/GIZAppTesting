import { Dimensions, FlatList, View, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Box, GluestackUIProvider, Heading, HStack, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Feather } from '@expo/vector-icons';

export class Reports extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    const data = [
      { id: 1, title: "ចំនួនស្រីមានផ្ទៃពោះ", value: "0 នាក់" },
      { id: 2, title: "ចំនួនស្រីក្រពេញស្បូន និងទារកអាយុ 0-6ខែ", value: "0 នាក់" },
      { id: 3, title: "ចំនួនកុមារអាយុ 7-8ខែ", value: "0 នាក់" },
      { id: 4, title: "ចំនួនកុមារអាយុ 6ខែ", value: "0 នាក់" },
      { id: 5, title: "ចំនួនកុមារអាយុ 9-11ខែ", value: "0 នាក់" },
      { id: 6, title: "ចំនួនកុមារអាយុ 12-23ខែ", value: "0 នាក់" },
      { id: 7, title: "ចំនួនកុមារអាយុ 24-59ខែ", value: "0 នាក់" },
    ];

    return (
      <GluestackUIProvider config={config}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: '100%',
              backgroundColor: '#5F3C8D',
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
            }}
          >
            <View
              style={{
                height: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                marginTop: height * 0.07,
              }}
            >
              <ScrollView>
                {/* Header */}
                <View style={{ padding: 20, marginTop: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Heading style={{ fontFamily: 'Khmer-Regular' }}>សម្រាប់</Heading>
                    <View
                      style={{
                        backgroundColor: '#0001',
                        borderRadius: 50,
                        height: 30,
                        width: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Feather name="download" size={20} color="black" />
                    </View>
                  </View>
                  <Text style={{ color: '#A7B7B9', fontSize: 8 }}>
                    ថ្ងៃទី01 ខែកក្កដា ឆ្នាំ 2024 - ថ្ងៃទី៣1 ខែកក្កដា ឆ្នាំ 2024
                  </Text>
                </View>

                {/* Report Section */}
                <Box
                  borderColor="#A7B7B9"
                  borderWidth={0.5}
                  padding={10}
                  borderRadius={10}
                  marginHorizontal={20}
                >
                  <Heading size="lg">សរុប 0 នាក់</Heading>
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Box
                        borderBottomWidth="$2"
                        borderColor="#A7B7B9"
                        py="$3"
                      >
                        <HStack space="md" justifyContent="space-between">
                          <Text
                            color="$coolGray800"
                            fontWeight="$bold"
                            style={{ width: '80%' }}
                          >
                            {item.title}
                          </Text>
                          <Text color="$coolGray600">{item.value}</Text>
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={false} 
                  />
                </Box>
                {/* Customer Status Section */}
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                  <View
                    style={{
                      backgroundColor: '#EFEFEF',
                      padding: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text>ឈ្មោះអតិថិជន</Text>
                    <Text>ស្ថានភាព</Text>
                  </View>
                  <Text style={{ alignSelf: 'center', marginTop: 10 }}>មិនមានអតិថិជន</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </GluestackUIProvider>
    );
  }
}

export default Reports;
