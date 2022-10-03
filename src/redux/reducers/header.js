import { SHOWMENU, HIDEMENU } from "../constant"

const initState = 0
export default function headerReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case SHOWMENU:
            return preState + data
        case HIDEMENU:
            return preState - data
        default:
            return preState
    }
}