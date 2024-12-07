import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',

  },

  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#00000077',
  },

  container: {
    height: 300,
    backgroundColor: 'white'
  }
})