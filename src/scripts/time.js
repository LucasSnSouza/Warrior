import { useSystemStore } from "@/stores/system.store.js"

export function sleep(ms) {
    useSystemStore().setAwait(true)
    return new Promise(resolve => {
        setTimeout(() => {
            useSystemStore().setAwait(false)
            resolve()
        }, ms)
    })
}