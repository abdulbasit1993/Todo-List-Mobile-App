import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const AddTodoModal = ({isVisible, onClosePress, onSubmitPress}) => {
  const [todoText, setTodoText] = useState('');

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={onClosePress}>
            <Icon name="close" color={colors.WHITE} style={{fontSize: 30}} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          <Text style={styles.headingText}>Add Todo</Text>

          <TextInput
            placeholder="Enter todo content..."
            style={styles.inputBox}
            onChangeText={text => setTodoText(text)}
          />

          <TouchableOpacity
            onPress={() => onSubmitPress(todoText)}
            style={styles.submitBtn}>
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    height: responsiveHeight(50),
    borderRadius: 10,
  },
  topHeader: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalBody: {
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  headingText: {
    color: colors.WHITE,
    fontSize: 25,
    marginBottom: responsiveWidth(7),
  },
  inputBox: {
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
    width: responsiveWidth(80),
    padding: responsiveWidth(3),
    borderRadius: 10,
  },
  submitBtn: {
    backgroundColor: colors.SECONDARY,
    width: responsiveWidth(32),
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
    borderRadius: 30,
  },
  btnTxt: {
    color: colors.WHITE,
    fontSize: 20,
  },
});

export default AddTodoModal;
