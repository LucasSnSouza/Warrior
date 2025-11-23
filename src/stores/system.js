import { defineStore } from "pinia";

export const useSystemStore = defineStore('system', {
    state: () => ({
        theme: 'white',
        language: {label: "english", value: "en"},
        languages: [
            { label: "portuguese", value: "pt" },
            { label: "english", value: "en" },
        ],
        themes: [
            "",
            "light-gray",
            "light-red",
            "light-orange",
            "light-green",
        ],
    }),
    getters: {
        getTheme: (state) => state.theme,
        getCurrentLanguage: (state) => state.language,
        getLanguages: (state) => state.languages,
        getThemes: (state) => state.themes,
    },
    actions: {
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
    }
})