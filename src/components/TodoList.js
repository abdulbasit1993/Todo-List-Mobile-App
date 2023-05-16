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
import EditIcon from 'react-native-vector-icons/FontAwesome5';

const TodoList = ({
  data,
  isRefreshing,
  onRefresh,
  onDeletePress,
  onEditPress,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <View style={{width: '80%'}}>
            <Text style={styles.itemText}>{item?.content}</Text>
          </View>

          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => onEditPress(item)}
              style={styles.editBtn}>
              <EditIcon
                name="edit"
                color={colors.WHITE}
                style={{fontSize: 18}}
              />
            </TouchableOpacity>

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
  editBtn: {
    backgroundColor: colors.PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoList;
