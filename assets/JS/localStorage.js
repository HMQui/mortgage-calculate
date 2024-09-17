const MORTAGE_KEY = 'MORTAGE'

export default {
    set(allInput) {
        localStorage.setItem(MORTAGE_KEY, JSON.stringify(allInput))
    },

    get() {
        return JSON.parse(localStorage.getItem(MORTAGE_KEY))
    }
} 