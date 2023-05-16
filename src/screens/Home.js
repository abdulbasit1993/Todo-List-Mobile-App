import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Loader from '../components/Loader';
import FloatingActionButton from '../components/FloatingActionButton';
import AddTodoModal from '../components/AddTodoModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import UpdateTodoModal from '../components/UpdateTodoModal';
import TodoList from '../components/TodoList';
import {colors} from '../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from '../redux/actions/todoAction';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Toast from 'react-native-toast-message';

const Home = () => {
  const dispatch = useDispatch();

  const todoReducer = useSelector(state => state?.todoReducer);
  const todoData = useSelector(state => state?.todoReducer?.todos?.data);
  // console.log('todoReducer ===>>>> ', todoReducer);
  // console.log('todoData ===>>>> ', todoData);

  const [isAddTodoModalVisible, setIsAddTodoModalVisible] = useState(false);
  const [isDeleteTodoModalVisible, setIsDeleteTodoModalVisible] =
    useState(false);
  const [isUpdateTodoModalVisible, setIsUpdateTodoModalVisible] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const handleUpdateSubmit = data => {
    if (!selectedItem) {
      console.log('no item selected...');
      return;
    } else {
      console.log('submitting for update ===> ', data);

      const dataObj = {
        content: data,
      };

      if (!data) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Please enter some todo content!',
        });
        setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible);
        return;
      } else {
        dispatch(updateTodo(dataObj, selectedItem?._id));
        setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible);
      }
    }
  };

  const handleDelete = item => {
    setItemToDelete(item);
    setIsDeleteTodoModalVisible(!isDeleteTodoModalVisible);
  };

  const handleUpdate = item => {
    setSelectedItem(item);
    setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible);
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
                onEditPress={item => handleUpdate(item)}
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

      <UpdateTodoModal
        isVisible={isUpdateTodoModalVisible}
        onClosePress={() =>
          setIsUpdateTodoModalVisible(!isUpdateTodoModalVisible)
        }
        onSubmitPress={data => handleUpdateSubmit(data)}
        selectedItem={selectedItem}
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
