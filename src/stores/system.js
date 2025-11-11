import { defineStore } from "pinia";

export const useSystemStore = defineStore('system', {
    state: () => ({
        theme: '',
        language: {label: "english", value: "en"},
        languages: [
            { label: "portuguese", value: "pt" },
            { label: "english", value: "en" },
        ],
        themes: [
            "",
            "white"
        ],
        sidebar: false,
        logged: true,
    }),
    getters: {
        getTheme: (state) => state.theme,
        getCurrentLanguage: (state) => state.language,
        getLanguages: (state) => state.languages,
        getThemes: (state) => state.themes,
        getSidebar: (state) => state.sidebar,
        getLogged: (state) => state.logged
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
        toggleSidebar(value=false){
            if(value){
                this.sidebar = value
                return;
            }
            this.sidebar = !this.sidebar
        },
        toggleLoggedState(value=false){
            if(value){
                this.logged = value
                return;
            }
            this.logged = !this.logged
        }
    }
})