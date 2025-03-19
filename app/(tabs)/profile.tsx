import React from 'react';
import { Image, ScrollView, Pressable } from 'react-native';
import { View, Text } from '@/components/Themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="p-4">
          {/* Profile Info */}
          <View className="items-center mb-6 mt-5">
            <Image
              source={{ uri: 'https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/474067369_1996956047454586_6723640906213712415_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE7H6DAUNhgWvuvB1eTA1Ap-Ezey00ZPEn4TN7LTRk8SRxqlxaWnzi_20uyNA7Qi9Sf8OMSawapsXfejqapZgS4&_nc_ohc=DEM_qovPd1gQ7kNvgEoHT0Z&_nc_oc=AdjLG-5rC48o3_P3wqL0Ft2OwlqYtLEqtR_BleecwFHlDvsVNgaaBrl0uzWBoRtiv9M&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=fz1esq0ExIi4wPbHi1dxyA&oh=00_AYGsDLySWPJHlgaKCKR_BFmZrlSJv3fxk27f3VpXs-hAnw&oe=67DEDD15' }}
              className="w-20 h-20 rounded-full"
            />
            <Text className="text-3xl mt-5" fontWeight='medium'>บัณฑิต พูลเดช</Text>
            <Text className="text-blue-400 text-base">ดูโปรไฟล์ Marketplace</Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รายการที่บันทึกไว้')}>
              <FontAwesome name="heart" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">รายการที่บันทึกไว้</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: กล่องข้อความ')}>
              <FontAwesome name="envelope" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">กล่องข้อความ</Text>
            </Pressable>
          </View>
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รีวิว')}>
              <FontAwesome name="star" size={24} className='dark:!text-white'   />
              <Text className="mt-2 text-center">รีวิว</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: ดูล่าสุด')}>
              <FontAwesome name="clock-o" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">ดูล่าสุด</Text>
            </Pressable>
          </View>

          {/* Sections */}
          <Section title="การขาย">
            <SectionItem icon="list" text="รายการสินค้าของคุณ" />
            <SectionItem icon="bolt" text="การดำเนินการด่วน" />
            <SectionItem icon="users" text="ผู้ติดตามบน Marketplace" />
            <SectionItem icon="line-chart" text="กิจกรรมการขายทั้งหมด" />
          </Section>

          <Section title="การตั้งค่า">
            <SectionItem icon="cog" text="กำลังติดตาม" />
          </Section>

          <Section title="บัญชี">
            <SectionItem icon="map-marker" text="ตำแหน่ง" />
            <SectionItem icon="lock" text="ความปลอดภัย" />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View className="mb-6">
    <Text className="text-lg text-gray-100" fontWeight='medium'>{title}</Text>
    {children}
  </View>
);

const SectionItem = ({ icon, text }: { icon: string, text: string }) => (
  <Pressable
    className="flex-row items-center mb-4 p-2 rounded-lg"
    onPress={() => console.log(`Pressed: ${text}`)}

    android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}
  >
    <FontAwesome name={icon as any} size={24} className="mr-4 dark:!text-white" />
    <Text className="text-base">{text}</Text>
  </Pressable>
);