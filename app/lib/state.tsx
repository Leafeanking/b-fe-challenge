import { proxy } from 'valtio'

const state = proxy({ search: '' })

export default state