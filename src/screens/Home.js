import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Loader from '../components/Loader';
import FloatingActionButton from '../components/FloatingActionButton';
import AddTodoModal from '../components/AddTodoModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import TodoList from '../components/TodoList';
import {colors} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos, addTodo, deleteTodo} from '../redux/actions/todoAction';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Toast from 'react-native-toast-message';

const Home = () => {
  const dispatch = useDispatch();

  const todoReducer = useSelector(state => state?.todoReducer);
  const todoData = useSelector(state => state?.todoReducer?.todos?.data);
  console.log('todoReducer ===>>>> ', todoReducer);
  console.log('todoData ===>>>> ', todoData);

  const [isAddTodoModalVisible, setIsAddTodoModalVisible] = useState(false);
  const [isDeleteTodoModalVisible, setIsDeleteTodoModalVisible] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(getTodos());

    setIsRefreshing(false);
  };

  const handleSubmit = data => {
    console.log('submit pressed... ', data);

    const dataObj = {
      content: data,
    };

    if (!data) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter some todo content!',
      });
      setIsAddTodoModalVisible(!isAddTodoModalVisible);
      return;
    } else {
      dispatch(addTodo(dataObj));
      setIsAddTodoModalVisible(!isAddTodoModalVisible);
    }
  };

  const handleDelete = item => {
    setItemToDelete(item);
    setIsDeleteTodoModalVisible(!isDeleteTodoModalVisible);
  };

  const triggerDelete = () => {
    if (!itemToDelete) {
      console.log('no item selected...');
      return;
    } else {
      console.log('deleting item... ', itemToDelete);
      dispatch(deleteTodo(itemToDelete?._id));
      setIsDeleteTodoModalVisible(!isDeleteTodoModalVisible);
    }
  };

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
              <TodoList
                data={todoData}
                isRefreshing={isRefreshing}
                onRefresh={handleRefresh}
                onDeletePress={item => handleDelete(item)}
              />
            </View>
          )}
        </View>
      </View>

      <FloatingActionButton onPress={() => setIsAddTodoModalVisible(true)} />

      <AddTodoModal
        isVisible={isAddTodoModalVisible}
        onClosePress={() => setIsAddTodoModalVisible(!isAddTodoModalVisible)}
        onSubmitPress={data => handleSubmit(data)}
      />

      <DeleteConfirmModal
        isVisible={isDeleteTodoModalVisible}
        onClosePress={() =>
          setIsDeleteTodoModalVisible(!isDeleteTodoModalVisible)
        }
        onDeletePress={() => triggerDelete()}
      />
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
