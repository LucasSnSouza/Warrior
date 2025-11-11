import { useSystemStore } from '@/stores/system.js'

import pt from "./pt";
import en from "./en";

const translations = {
    pt,
    en,
}

export function translate(key) {
    const adjustedKey = key.startsWith('labels.') ? key : `labels.${key}`;
    const keys = adjustedKey.split('.');
    return keys.reduce(
        (obj, k) => (obj && obj[k] ? obj[k] : null), 
        translations[useSystemStore().getCurrentLanguage?.value || "en"]
    ) || key;
}