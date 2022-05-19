import * as RNLocalize from 'react-native-localize';
import en from '@assets/localization/en.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';

const DEFAULT_LANGUAGE = (Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier).substring(0, 2)
const APP_LANGUAGE = 'appLanguage';

export const languages = { en }
const localizedStrings = new LocalizedStrings(languages)

const translations = (key: string, data?: Record<string, any>) => {
    let s = localizedStrings[key] || key
    if (data) {
        Object.entries(data).forEach(([dataKey, value]) => {
            s = s.replace("$" + dataKey, value?.toString())
        })
    }

    return s
}

export const LocalizationContext = createContext({
    translations,
    setAppLanguage: (language: string) => { },
    appLanguage: DEFAULT_LANGUAGE,
    initializeAppLanguage: () => { },
});

export const useLocalization = () => useContext(LocalizationContext);

interface LocalizationProviderProps {
    children: any
}

const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
    const [appLanguage, setAppLanguage] = useState<string>()

    useEffect(() => {
        AsyncStorage.getItem(APP_LANGUAGE)
            .then(language => {
                setLanguage(language || DEFAULT_LANGUAGE)
            })
            .catch(e => setLanguage(DEFAULT_LANGUAGE))
    }, [])

    const setLanguage = (language: string) => {
        localizedStrings.setLanguage(language)
        setAppLanguage(language)
        AsyncStorage.setItem(APP_LANGUAGE, language)
    };

    const initializeAppLanguage = async () => {
        const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE)
        if (currentLanguage) {
            setLanguage(currentLanguage)
        } else {
            let localeCode = DEFAULT_LANGUAGE
            const supportedLocaleCodes = localizedStrings.getAvailableLanguages()
            const phoneLocaleCodes = RNLocalize.getLocales().map(locale => locale.languageCode)
            phoneLocaleCodes.some(code => {
                if (supportedLocaleCodes.includes(code)) {
                    localeCode = code
                    return true
                }
            })
            setLanguage(localeCode)
        }
    };

    return <LocalizationContext.Provider
        value={{
            translations,
            setAppLanguage: setLanguage,
            appLanguage,
            initializeAppLanguage,
        }}>
        {children}
    </LocalizationContext.Provider>
};

export default LocalizationProvider
