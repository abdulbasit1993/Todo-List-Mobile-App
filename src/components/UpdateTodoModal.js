import React, {useState, useEffect} from 'react';
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
import moment from 'moment';

const UpdateTodoModal = ({
  isVisible,
  onClosePress,
  onSubmitPress,
  selectedItem,
}) => {
  console.log('updateTodoModal.js:23 ~ selectedItem:', selectedItem);

  const [todoText, setTodoText] = useState('');
  const [isDetailsView, setIsDetailsView] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setTodoText(selectedItem.content || '');
    }
  }, [selectedItem]);

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={onClosePress}>
            <Icon name="close" color={colors.WHITE} style={{fontSize: 30}} />
          </TouchableOpacity>
        </View>

        <View style={styles.modalBody}>
          {isDetailsView ? (
            <>
              <View>
                <Text
                  style={{
                    color: colors.WHITE,
                    fontSize: 24,
                    textDecorationLine: 'underline',
                  }}>
                  Created At:
                </Text>
                <Text
                  style={{color: colors.WHITE, fontSize: 22, marginBottom: 20}}>
                  {moment(selectedItem?.createdAt).format(
                    'dddd, MMMM D, YYYY h:mm A',
                  )}
                  {'\n'}({moment(selectedItem?.createdAt).fromNow()})
                </Text>
                <Text
                  style={{
                    color: colors.WHITE,
                    fontSize: 24,
                    textDecorationLine: 'underline',
                  }}>
                  Updated At:
                </Text>
                <Text style={{color: colors.WHITE, fontSize: 22}}>
                  {moment(selectedItem?.updatedAt).format(
                    'dddd, MMMM D, YYYY h:mm A',
                  )}
                  {'\n'}({moment(selectedItem?.updatedAt).fromNow()})
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setIsDetailsView(!isDetailsView)}
                style={styles.submitBtn}>
                <Text style={styles.btnTxt}>Go Back</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.headingText}>Update Todo</Text>

              <TextInput
                style={styles.inputBox}
                defaultValue={selectedItem?.content}
                onChangeText={text => setTodoText(text)}
              />

              <TouchableOpacity
                onPress={() => onSubmitPress(todoText)}
                style={styles.submitBtn}>
                <Text style={styles.btnTxt}>Submit</Text>
              </TouchableOpacity>

              <View style={{marginTop: '8%'}}>
                <TouchableOpacity
                  onPress={() => setIsDetailsView(!isDetailsView)}>
                  <Text style={styles.linkTxt}>View Todo Details</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    height: responsiveHeight(48),
    borderRadius: 10,
  },
  topHeader: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  modalBody: {
    alignItems: 'center',
    marginTop: responsiveHeight(2),
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
  linkTxt: {
    fontSize: 17,
    color: colors.WHITE,
    textDecorationLine: 'underline',
  },
});

export default UpdateTodoModal;
