import { reactive, readonly } from "vue"

interface IState {}

const _state = reactive<IState>({})

const state = readonly(_state)

const actions = {}

export default { state, actions }