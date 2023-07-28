// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
// // import Modal from '../Modal/Modal';

// const Welcome = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [number, onChangeNumber] = useState('');
//   const [text, onChangeText] = useState('');
//   const [date, setDate] = useState('');
 
//   const handleSchedulePayment = () => {
//     setModalVisible(true)
//   }

//   const headingText = {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 15,
//   };

//   const labelText = {
//     fontSize: 16.5,
//     fontWeight: '500',
//   };

//   const inputStyle = {
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 4,
//     borderWidth: 1,
//     border: 0,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     marginTop: 15,
//   };

//   const horizontalLineStyle = {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#444',
//     marginLeft: 10,
//   };

//   const clickHereLineStyle = {
//     position: 'absolute',
//     flex: 1,
//     height: 1,
//     backgroundColor: '#B70303',
//     left: 80,
//   }

 
//   return (
//     <View>
      
//       <Text style={headingText}>Payment Schedule</Text>
//       <Text style={[labelText, { fontStyle: 'italic' }]}>
//         Kindly process your scheduled payment below
//       </Text>

//       <Text style={[labelText, { marginTop: 25, marginBottom: 8 }]}>Amount</Text>
//       <TextInput
//         style={inputStyle}
//         value={number}
//         onChangeText={onChangeNumber}
//       />

//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//         <Text style={[labelText, { fontStyle: 'italic', color: '#B70303' }]}>
//           Confirm your bank details
//         </Text>
//         <View style={horizontalLineStyle} />
//       </View>

//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
//         <Feather name="users" size={25} color="#B70303" />
//         <Text style={{ flex: 1, ...labelText, marginLeft: 17 }}>
//           Withdraw balance to your Primary Account
//         </Text>
//       </View>

//       <TextInput
//         style={{ ...inputStyle, height: 100, borderRadius: 6 }}
//         value={text}
//         onChangeText={onChangeText}
//       />

//       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
//         <Text style={{ ...labelText, marginTop: 20 }}>
//           Want to change your primary account?
//         </Text>
//         <TouchableOpacity 
//           style={{ marginLeft: 10 }}
//           >
//           <Text style={{ color: '#B70303', fontSize: 16.5, fontStyle: 'italic' }}>Click here</Text>
//           <View style={clickHereLineStyle} />
//         </TouchableOpacity>
//       </View>

//       <View style={{ flexDirection: 'row', marginTop: 15 }}>
//         <MaterialCommunityIcons name="calendar-plus" size={30} color="#B70303" />
//         <Text style={{ ...labelText, marginLeft: 20 }}>Payment Date</Text>
//       </View>

//       <TextInput
//         style={inputStyle}
//         value={date}
//         // onChangeText={}
//       />
 
//       <TouchableOpacity 
//        onPress={handleSchedulePayment}
//        style={{ ...inputStyle, backgroundColor: '#B70303', marginTop: 80, alignItems: 'center', borderRadius: 8, justifyContent: 'center' }}>
//         <Text style={{ color: 'white', fontSize: 16.5, fontWeight: '500' }}>Schedule Payment</Text>
//       </TouchableOpacity>
//       <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
//     </View>
//   );
// };

// export default Welcome; 

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
const Welcome = () => {
  const [number, onChangeNumber] = useState('');
  const [text, onChangeText] = useState('');
  const [date, setDate] = useState('');
  const headingText = {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  };
  const labelText = {
    fontSize: 16.5,
    fontWeight: '500',
  };
  const inputStyle = {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    border: 0,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
  };
  const horizontalLineStyle = {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
    marginLeft: 10,
  };
  const clickHereLineStyle = {
    position: 'absolute',
    flex: 1,
    height: 1,
    backgroundColor: '#B70303',
    left: 80,
  }
  return (
    <View>
      <Text style={headingText}>Payment Schedule</Text>
      <Text style={[labelText, { fontStyle: 'italic' }]}>
        Kindly process your scheduled payment below
      </Text>
      <Text style={[labelText, { marginTop: 25, marginBottom: 8 }]}>Amount</Text>
      <TextInput
        style={inputStyle}
        value={number}
        onChangeText={onChangeNumber}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={[labelText, { fontStyle: 'italic', color: '#B70303' }]}>
          Confirm your bank details
        </Text>
        <View style={horizontalLineStyle} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <Feather name="users" size={25} color="#B70303" />
        <Text style={{ flex: 1, ...labelText, marginLeft: 17 }}>
          Withdraw balance to your Primary Account
        </Text>
      </View>
      <TextInput
        style={{ ...inputStyle, height: 100, borderRadius: 6 }}
        value={text}
        onChangeText={onChangeText}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Text style={{ ...labelText, marginTop: 20 }}>
          Want to change your primary account?
        </Text>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={{ color: '#B70303', fontSize: 16.5, fontStyle: 'italic' }}>Click here</Text>
          <View style={clickHereLineStyle} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <MaterialCommunityIcons name="calendar-plus" size={30} color="#B70303" />
        <Text style={{ ...labelText, marginLeft: 20 }}>Payment Date</Text>
      </View>
      <TextInput
        style={inputStyle}
        value={date}
        // onChangeText={}
      />
      <TouchableOpacity style={{ ...inputStyle, backgroundColor: '#B70303', marginTop: 80, alignItems: 'center', borderRadius: 8, justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16.5, fontWeight: '500' }}>Schedule Payment</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Welcome;