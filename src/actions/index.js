export const BUY_ITEM = 'BUY_ITEM';

export const buyItemAC = item => {
    console.log("Made it to action!", item);
    return { type: BUY_ITEM, payload: item};
};