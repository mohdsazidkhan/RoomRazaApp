import { ToastAndroid } from 'react-native';

export default function showToast(msg) {
    ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP
    );
}
