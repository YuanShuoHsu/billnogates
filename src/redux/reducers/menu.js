import { SHOW_MENU, HIDE_MENU } from "../constant"

const initState = ""
export default function headerReducer(preState = initState, action) {
    const { type } = action
    switch (type) {
        case SHOW_MENU:
            return "active"
        case HIDE_MENU:
            return ""
        default:
            return preState
    }
}