import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../constants/colors';
import DeleteIcon from 'react-native-vector-icons/Foundation';

const TodoList = ({data, isRefreshing, onRefresh, onDeletePress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <View style={{width: '90%'}}>
            <Text style={styles.itemText}>{item?.content}</Text>
          </View>

          <View style={{width: '10%'}}>
            <TouchableOpacity
              onPress={() => onDeletePress(item)}
              style={styles.deleteBtn}>
              <DeleteIcon
                name="trash"
                color={colors.WHITE}
                style={{fontSize: 18}}
              />
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: colors.BLACK,
    fontSize: 18,
  },
  deleteBtn: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoList;
