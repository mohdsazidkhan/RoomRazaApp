import { PixelRatio, Dimensions } from "react-native";

export const AppFontSize = {
    FontsSize_08: 8,
    FontsSize_09: 9,
    FontsSize_10: 10,
    FontsSize_11: 11,
    FontsSize_12: 12,

    FontsSize_13: 13,
    FontsSize_14: 14,
    FontsSize_15: 15,
    FontsSize_16: 16,
    FontsSize_17: 17,

    FontsSize_18: 18,
    FontsSize_19: 19,
    FontsSize_20: 20,
    FontsSize_21: 21,
    FontsSize_22: 22,

    FontsSize_23: 23,
    FontsSize_24: 24,
    FontsSize_25: 25,
    FontsSize_30: 30,
    FontsSize_35: 35,
};

export const getCustomSize = (originalSize: number) => {
    if (PixelRatio.get() < 1.5) {
        return (originalSize * 0.5) / PixelRatio.get()
    } else if (PixelRatio.get() >= 1.5 && PixelRatio.get() < 2.5) {
        return (originalSize * 1.5) / PixelRatio.get()
    } else if (PixelRatio.get() >= 2.5) {
        return (originalSize * 2.0) / PixelRatio.get()
        // return (originalSize * 2.5) / PixelRatio.get()
    } else {
        return originalSize
    }
}

// const { width, height } = Dimensions.get('window');

// const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
// const guidelineBaseWidth = 360;
// const guidelineBaseHeight = 720;

// export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

// export const getCustomSize = (size: number, factor = 0.3) => size + (scale(size) - size) * factor;


// export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
