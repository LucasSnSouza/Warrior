import { defineStore } from "pinia";

export const useSystemStore = defineStore('system', {
    state: () => ({
        theme: 'white',
        language: {label: "english", value: "en"},
        languages: [
            { label: "portuguese", value: "pt" },
            { label: "english", value: "en" },
        ],
        isAwait: false,
        isComplementary: false,
        themes: [
            "",
            "light-gray",
            "light-red",
            "light-orange",
            "light-green",
        ],
        scrollReference: null,
        toasts: []
    }),
    getters: {
        getTheme: (state) => state.theme,
        getCurrentLanguage: (state) => state.language,
        getLanguages: (state) => state.languages,
        getThemes: (state) => state.themes,
        getAwait: (state) => state.isAwait,
        getComplementary: (state) => state.isComplementary,
        getToasts: (state) => state.toasts,
        getScrollReference: (state) => state.scrollReference
    },
    actions: {
        setAwait(value){
            this.isAwait = value
        },
        setScrollReference(reference){
            this.scrollReference = reference
        },
        resetScroll(){
            if(this.scrollReference){
                this.scrollReference.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        },
        toggleComplementary(){
            this.isComplementary = !this.isComplementary
        },
        toggleLanguage(language){
            this.language = language;
        },
        toggleTheme(){
            let theme_index = this.themes.findIndex(theme => theme == this.theme)
            if(theme_index >= this.themes.length - 1){
                this.theme = this.themes[0];
                return;
            }
            this.theme = this.themes[theme_index + 1];
        },
        setToast(text, duration = 1){
            this.toasts.push({
                value: text
            })
            setTimeout(() => {
                this.toasts.splice(1,1)
            }, duration)
        }
    }
})