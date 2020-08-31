//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

// export function retrieveItem(storageKey) {
//   try {
//     var retrievedItem = AsyncStorage.getItem(storageKey)
//       .then((value) => {
//         const data = JSON.parse(value);
//         console.log('name is ', data);
//       });
//     return retrievedItem;
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// }


// export function saveItem(storageKey, storageValue) {
//   console.log("storageKey ===>", storageKey, "storageValue ===>", storageValue)
//   try {
//     AsyncStorage.set(storageKey, storageValue);
//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// export function removeItem(storageKey) {
//   try {
//     AsyncStorage.remove(storageKey)
//     return true;
//   } catch (error) {
//     return false;
//   }
// }



const saveItem = async (key, value) => {
  console.log("storageKey ===>", key, "storageValue ===>", value)
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

const retrieveItem = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    let parsed = JSON.parse(result);
    console.log("--------------result", parsed);
    return result;
  } catch (error) {
    console.log(error);
  }
}


export { saveItem, retrieveItem };
