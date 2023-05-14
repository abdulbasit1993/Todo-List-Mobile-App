import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Loader from '../components/Loader';
import FloatingActionButton from '../components/FloatingActionButton';
import TodoList from '../components/TodoList';
import {colors} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../redux/actions/todoAction';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Home = () => {
  const dispatch = useDispatch();

  const todoReducer = useSelector(state => state?.todoReducer);
  const todoData = useSelector(state => state?.todoReducer?.todos?.data);
  console.log('todoData from selector ===>>>> ', todoData);
  console.log('todoReducer ===>>>> ', todoReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Todo List App" />

        <View style={styles.subContainer}>
          {todoReducer?.isLoading ? (
            <Loader />
          ) : (
            <View>
              <TodoList data={todoData} />
            </View>
          )}
        </View>
      </View>
      <FloatingActionButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SECONDARY,
  },
  subContainer: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
});

export default Home;
