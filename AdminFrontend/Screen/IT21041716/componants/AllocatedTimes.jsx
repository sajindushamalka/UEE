import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from 'react'
import image from '../assets/gym6.jpg'
import { useSelector } from 'react-redux'
import axios from 'axios'

const AllocatedTimes = () => {

  const user = useSelector((state) => state.auth.user)
  const [tableData, setTableData] = useState([])

  const form = {
    gymName: user.gymName
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://192.168.8.160:8086/timetable/get", form);
        if (res.status === 200) {
          console.log("success");
          setTableData(res.data.data)
        } else if (res.status === 400) {
          console.log("error");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user]);

  console.log(tableData)

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View>
          <ImageBackground source={image} style={style.Image}>
            <View
              style={{ backgroundColor: "black", marginTop: 150, opacity: 0.85 }}
            >
              <Text style={style.HeaderText}> Members Weekly Gym Allocations</Text>
            </View>
            <View
              style={{ backgroundColor: "black", opacity: 0.75, height: 130 }}
            >
            </View>
          </ImageBackground>
        </View>
        <View style={style.secondDiv}>
          <ScrollView>
            <View style={style.imgContainer}>
              <View style={style.dayView}>
                <Text style={style.dayText}>Allocated Time Shedule</Text>
                {
                  tableData.map((data, index) => (
                    <View key={index} style={{ flexDirection: 'column', marginVertical: 10 }}>
                      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Member {index + 1}:</Text>
                      <Text style={{ marginBottom: 5 }}>Member ID: {data.memberId}</Text>
                      <Text style={{ marginBottom: 5 }}>Time Table:</Text>
                      {data.timeTable.map((time, timeIndex) => (
                        <View key={timeIndex} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ flex: 1, textAlign: 'left' }}>{timeIndex + 1}</Text>
                          <Text style={{ flex: 2, textAlign: 'left' }}>{new Date(time).toLocaleString('en-GB')}</Text>
                        </View>
                      ))}
                      <View style={{ borderBottomWidth: 1, marginTop: 10 }} />
                    </View>
                  ))
                }
              </View>

            </View>

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  HeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
  },
  Image: {
    width: 385,
    height: 270,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "black",
      },
    }),
    resizeMode: "contain",
    backgroundColor: "black",
  },
  secondDiv: {
    height: 350,
    width: '100%',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  dayView: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#aaaaaa',
    padding: 20,
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AllocatedTimes