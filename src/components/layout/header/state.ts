import { reactive, readonly } from "vue"

interface IState {
    title: string
    btnMenu: boolean
    btnBack: boolean
}

const _state = reactive<IState>({
    title: '',
    btnMenu: false,
    btnBack: false,
})

const state = readonly(_state)

const actions = {
    reset() {
        _state.title = ''
        _state.btnMenu = false
        _state.btnBack = false
    },
    setTitle(newValue: string) {
        _state.title = ''
        
        setTimeout(() => {
            _state.title = newValue
        }, 100)
    },
    useBtnMenu() {
        _state.btnMenu = true
    },
    useBtnBack() {
        _state.btnBack = true
    }
}

export { state, actions }