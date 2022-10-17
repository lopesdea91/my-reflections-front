import { reactive, readonly } from "vue"

interface IState {
    loading: boolean
}

const _state = reactive<IState>({
    loading: false
})

const state = readonly(_state)

const actions = {
    startLoading() {
        _state.loading = true
    },
    endLoading() {
        _state.loading = false
    }
}

export { state, actions }