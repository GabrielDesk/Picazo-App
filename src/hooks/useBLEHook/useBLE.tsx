// import { useState } from 'react';
// import { PermissionsAndroid, Platform } from 'react-native';
// import { BleManager, Device } from 'react-native-ble-plx';

// import DeviceInfo from 'react-native-device-info';
// import { requestMultiple, PERMISSIONS } from 'react-native-permissions';

// type PermissionCallback = (result: boolean) => void;

// const bleManager = new BleManager();

// interface BluetoothLowEnergyApi {
//   requestPermissions(callback: PermissionCallback): Promise<void>;
//   scanForDevices(): void;
//   allDevices: Device[];
// }

// export default function useBLE(): BluetoothLowEnergyApi {
//   const [allDevices, setAllDevices] = useState<Device[]>([]);

//   const requestPermissions = async (callback: PermissionCallback) => {
//     if (Platform.OS === 'android') {
//       const apiLevel = await DeviceInfo.getApiLevel();
//       console.log({ apiLevel });

//       if (apiLevel < 31) {
//         const grantedStatus = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location permission',
//             message: 'Bluetooth Low Energy Needs Location Permission',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'Ok',
//             buttonNeutral: 'Maybe Later',
//           },
//         );
//         callback(grantedStatus === PermissionsAndroid.RESULTS.GRANTED);
//       } else {
//         const result = await requestMultiple([
//           PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
//           PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
//           PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//         ]);

//         const isAllPermissionsGaranted =
//           result['android.permission.BLUETOOTH_SCAN'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           result['android.permission.BLUETOOTH_CONNECT'] ===
//             PermissionsAndroid.RESULTS.GRANTED &&
//           result['android.permission.ACCESS_FINE_LOCATION'] ===
//             PermissionsAndroid.RESULTS.GRANTED;

//         callback(isAllPermissionsGaranted);
//       }
//     } else {
//       callback(true);
//     }
//   };

//   const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
//     devices.findIndex((device) => nextDevice.id === device.id) > -1;

//   const scanForDevices = async () => {
//     bleManager.startDeviceScan(null, null, (error, device) => {
//       if (error) {
//         console.log(error);
//       }

//       if (device && device.name) {
//         setAllDevices((prevState) => {
//           if (!isDuplicateDevice(prevState, device)) {
//             return [...prevState, device];
//           }
//           return prevState;
//         });
//       }
//     });
//   };

//   return {
//     requestPermissions,
//     scanForDevices,
//     allDevices,
//   };
// }
