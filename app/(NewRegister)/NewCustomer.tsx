import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView, CircleIcon, GluestackUIProvider,Input,Button, InputField, Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal, SelectTrigger, Textarea, TextareaInput, AddIcon, ButtonIcon, ButtonText } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
export function NewCustomer() {
  var {height} = Dimensions.get('window');

    return (

      <GluestackUIProvider config={config} >
        <View style={{flex:1}}>
          <View style={{
            backgroundColor: '#5F3C8D',
            top: 0,
            right: 0,
            left: 0,
            height: '100%',
            position: 'absolute',
          }}> 
          <View style={{position:'absolute',top:70,left:20}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
              <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="chevron-back-outline" size={30} color="white" />
              </TouchableOpacity>
              <Text style={{fontSize:20,color:'white',fontFamily:'BattambangBold'}}>ចុះឈ្មោះអតិថិជនថ្មី</Text>
            </View>
          </View>

            <View
            style={{
              backgroundColor: 'white',
              height: '100%',
              marginTop: height * .15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
            >
              <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:130, height: '150%',paddingBottom:220}}>
              <View style={{marginBottom:330}}>

                {/* input name */}
                <View style={{paddingHorizontal:20,marginTop:20,gap:20}}>
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>ឈ្មោះម្ដាយ ឬអាណាព្យាបាល</Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} marginTop={6} >
                      <InputField
                          placeholder='ចញ្ចូលឈ្មោះម្ដាយ ឬអាណាព្យាបាល' style={{fontSize:14,fontFamily:'BattambangRegular'}}
                      />
                    </Input>

                  </View>
                  {/* age input */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>អាយុម្ដាយ ឬអាណាព្យាបាល</Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} marginTop={6}>
                      <InputField
                          placeholder='បញ្ចូលអាយុម្ដាយ ឬអាណាព្យាបាល' style={{fontSize:14,fontFamily:'BattambangRegular'}}
                      />
                    </Input>

                  </View>
                  {/* phone number input */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>លេខទូរស័ព្ទ *</Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} marginTop={6}>
                      <InputField
                          placeholder='បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក *' style={{fontSize:14,fontFamily:'BattambangRegular'}}
                      />
                    </Input>

                  </View>
                  {/* gender input */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>ភេទ *</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:5,borderRadius:5,marginTop:6}}>

                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false}>
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>ស្រី</RadioLabel>
                        </Radio>
                      </RadioGroup>
                      <Text style={{fontSize:20,color:'#3F484B'}}>/</Text>
                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>ប្រុស</RadioLabel>
                        </Radio>
                      </RadioGroup>
                    </View>
                  </View>

                  {/* job info input */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>មុខរបរម្ដាយ ឬអាណាព្យាបាល</Text>
                    <View style={{marginTop:6}}>
                      <Select >
                        <SelectTrigger variant="outline" size="md" >
                          <SelectInput placeholder="ជ្រើសរើសមុខរបរម្ដាយ ឬអាណាព្យាបាល"  style={{fontSize:14 ,fontFamily:'BattambangRegular'}}/>
                          <MaterialIcons name="keyboard-arrow-down" size={26} color="#828282" style={{marginRight:5}} />
                        </SelectTrigger>
                        <SelectPortal>
                          <SelectBackdrop/>
                          <SelectContent>
                            <SelectDragIndicatorWrapper>
                              <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="គ្រូបង្រៀន" value="គ្រូបង្រៀន" />
                            <SelectItem label="កសិករ" value="កសិករ" />
                            <SelectItem
                              label="អ្នកគ្រប់គ្រងធនធានមនុស្ស "
                              value="អ្នកគ្រប់គ្រងធនធានមនុស្ស "
                            />
                            <SelectItem
                              label="អ្នកស្រាវជ្រាវ"
                              value="អ្នកស្រាវជ្រាវ"
                            />
                            <SelectItem
                              label=" អ្នកពិគ្រោះយោបល់"
                              value="អ្នកពិគ្រោះយោបល់"
                            />
                          </SelectContent>
                        </SelectPortal>
                      </Select>
                    </View>
                  </View>
                  {/* location */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>ទីតាំង *</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:5,borderRadius:5,marginTop:6}}>

                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false}>
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>ក្នុងតំបន់សេវា</RadioLabel>
                        </Radio>
                      </RadioGroup>
                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>ក្រៅតំបន់សេវា</RadioLabel>
                        </Radio>
                      </RadioGroup>
                    </View>
                  </View>
                  {/* address input */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>អាសយដ្ឋានម្ដាយ ឬអាណាព្យាបាល</Text>
                    <Textarea style={{height:100,marginTop:6}}>
                      <TextareaInput />
                    </Textarea>
                  </View>
                  {/* choosing village */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>ជ្រើសរើសភូមិ</Text>
                    <View style={{marginTop:6}}>
                      <Select>
                        <SelectTrigger variant="outline" size="md" >
                          <SelectInput placeholder="ជ្រើសរើសភូមិ"  style={{fontSize:14,fontFamily:'BattambangRegular'}}/>
                          <MaterialIcons name="keyboard-arrow-down" size={26} color="#828282" style={{marginRight:5}} />
                        </SelectTrigger>
                        <SelectPortal>
                          <SelectBackdrop/>
                          <SelectContent>
                            <SelectDragIndicatorWrapper>
                              <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="ភូមិជ័យសព្វ" value="ux" />
                            <SelectItem label="ភូមិទន្លេមាស " value="web" />
                            <SelectItem
                              label="ភូមិព្រៃស្រស់"
                              value="cross-platform"
                            />
                            <SelectItem
                              label="ភូមិអន្ទិល "
                              value="ui"
                            />
                            <SelectItem
                              label="ភូមិគោលបំណង"
                              value="backend"
                            />
                          </SelectContent>
                        </SelectPortal>
                      </Select>
                    </View>
                  </View>
                  {/* child status */}
                  <View>
                    <Text style={{fontFamily:'BattambangRegular'}}>ស្ថានភាពកូន *</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingVertical:6,borderRadius:5,marginTop:6}}>

                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>កូននៅក្នុងផ្ទៃ</RadioLabel>
                        </Radio>
                      </RadioGroup>
                      <RadioGroup>
                        <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
                          <RadioIndicator mr='$2'>
                            <RadioIcon as={CircleIcon}/>
                          </RadioIndicator>
                          <RadioLabel style={{fontSize:14,fontFamily:'BattambangRegular'}}>កូនក្រោយសម្រាលរួច</RadioLabel>
                        </Radio>
                      </RadioGroup>
                    </View>
                  </View>
                </View>
                {/* date picking */}
                
                <View style={{paddingHorizontal:20,marginTop:20}}>
                    <Text style={{fontFamily:'BattambangRegular'}}>រដូវចុងក្រោយរបស់ម្ដាយ </Text>
                    <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} marginTop={6}>
                      <InputField
                          placeholder='ជ្រើសរើសរដូវចុងក្រោយរបស់ម្ដាយ' style={{fontSize:14,fontFamily:'BattambangRegular'}}
                      />
                      <Fontisto name="date" size={20} color="black" style={{padding:5,marginRight:5,alignSelf:'center'}} />
                    </Input>

                </View>             
                {/* btn submit */}
                  <Button onPress={()=>router.push("/VerifyScreen")} size="md" variant="solid" backgroundColor='#5F3C8D' isDisabled={false} isFocusVisible={false} marginTop={30} width={80} alignSelf='flex-end' marginRight={20} >
                    <ButtonText style={{fontFamily:'BattambangRegular'}}>បញ្ជូន </ButtonText>
                  </Button>
              </View>
      

              </ScrollView>

            </View>
          </View>
        </View>
      </GluestackUIProvider>
    )
  }


export default NewCustomer;