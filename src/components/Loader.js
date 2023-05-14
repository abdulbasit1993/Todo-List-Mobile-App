import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from '../constants/colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colors.WHITE}
        style={{marginBottom: responsiveHeight(1)}}
      />
      <Text style={styles.loadText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadText: {
    color: colors.WHITE,
    fontSize: 22,
  },
});

export default Loader;
