import { SHOWMENU, HIDEMENU } from "../constant"

const initState = ""
export default function headerReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case SHOWMENU:
            return "active"
        case HIDEMENU:
            return ""
        default:
            return preState
    }
}