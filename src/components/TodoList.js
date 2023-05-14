import React from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../constants/colors';

const TodoList = ({data, isRefreshing, onRefresh}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item?.content}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.WHITE,
    margin: responsiveWidth(2),
    padding: responsiveWidth(3),
    width: responsiveWidth(90),
    borderRadius: 5,
  },
  itemText: {
    color: colors.BLACK,
    fontSize: 18,
  },
});

export default TodoList;
