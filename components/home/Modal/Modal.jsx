// import React, { useState } from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { MaterialIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';


// const Modal = () => {
//   const [modalVisible, setModalVisible] = useState()

//     const handleModalClose = () => {
//         setModalVisible(false)
//     }
//   return (
//     <View>
//       <Modal animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={handleModalClose}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style={styles.header}>
//               <Text style={styles.headerText}>Scheduled Successful</Text>
//               <MaterialIcons name="clear" size={24} color="#B70303" />
//             </View>
//             <View>
//               <Ionicons name="checkmark-circle" size={24} color="dark-green" />
//             </View>
//             <Text style={styles.modalText}>Dear Vendor, your payment has been scheduled successful. You will get a 
//             notification on the due date. Thank you</Text>
//             <TouchableOpacity 
//               style={styles.button}
//               onPress={handleModalClose}
//             >
//               <Text style={styles.textStyle}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   )
// }

// export default Modal

// const styles = StyleSheet.create({
//     centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },

//   modalView: {
//     width: 300,
//     height: 250,
//     margin: 0,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     // padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     elevation: 5,
//   },

//   modalText: {
//     flex: 1,
//     justifyContent: 'space-between',
//     textAlign: 'center',
//   },

//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   // const buttonClose = {
//   //   backgroundColor: '#2196F3',
//   // }
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
   
// header: {
//     width: 300,
//     top: 0,
//   backgroundColor: "#B70303",
//   borderTopLeftRadius: 20,
//   borderTopRightRadius: 20,
//   padding: 20,
//   alignItems: 'center', // Align the text horizontally in the center
// },


// headerText: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
// }
// })