export const BUY_ITEM = 'BUY_ITEM';
export const buyItemAC = item => {
    return { type: BUY_ITEM, payload: item};
};

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeFeatureAC = item => {
    return { type: REMOVE_ITEM, payload: item};
}