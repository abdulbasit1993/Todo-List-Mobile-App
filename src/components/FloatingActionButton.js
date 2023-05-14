import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcon name="add" style={{color: colors.WHITE, fontSize: 34}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    right: 30,
    backgroundColor: colors.PRIMARY,
    borderRadius: 60,
  },
});

export default FloatingActionButton;
