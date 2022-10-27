import { reactive, readonly } from "vue"

interface IState {
    indexActive: number
    statusMenu: boolean
}

const _state = reactive<IState>({
    indexActive: 0,
    statusMenu: false
})

const state = readonly(_state)

const actions = {
    setItemMenuActive(i: number) {
        _state.indexActive = i
    },
    setStatusMenu(status: boolean) {
        _state.statusMenu = status
    },
    toggleStatusMenu() {
        _state.statusMenu = !_state.statusMenu
    }
}

export default { state, actions }