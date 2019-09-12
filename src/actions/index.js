export const BUY_ITEM = 'BUY_ITEM';
export const buyItemAC = item => {
    // console.log("Made it to action!", item);
    return { type: BUY_ITEM, payload: item};
};

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeFeatureAC = item => {
    console.log("Made it to 'remove' action!", item);
    return { type: REMOVE_ITEM, payload: item};
}