import { SHOWMENU, HIDEMENU } from "../constant"

export const showMenu = data => ({ type: SHOWMENU, data })
export const hideMenu = data => ({ type: HIDEMENU, data })