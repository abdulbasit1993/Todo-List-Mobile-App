import React from 'react';
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

const DeleteConfirmModal = ({isVisible, onClosePress, onDeletePress}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <Text style={styles.headingText}>
            Are you sure you want to delete this todo?
          </Text>

          <View style={styles.btnsContainer}>
            <TouchableOpacity onPress={onDeletePress} style={styles.submitBtn}>
              <Text style={styles.btnTxt}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClosePress} style={styles.submitBtn}>
              <Text style={styles.btnTxt}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    height: responsiveHeight(35),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  headingText: {
    color: colors.WHITE,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: responsiveWidth(7),
    textAlign: 'center',
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
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default DeleteConfirmModal;
