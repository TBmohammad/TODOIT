import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default function SettingsScreen({
    styles,

    language,
    setLanguage,

    t,

    darkMode,
    setDarkMode,
}) {

    return (
        <View style={styles.screen}>

            <View style={styles.settingsCard}>

                <Text style={styles.settingsTitle}>
                    {t.settings}
                </Text>

                <View style={styles.settingItem}>
                    <Text style={styles.settingLeft}>
                        {t.darkMode}
                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            setDarkMode(!darkMode)
                        }
                    >
                        <Text style={styles.settingRight}>
                            {darkMode ? 'ON' : 'OFF'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.settingItem}>

                    <Text style={styles.settingLeft}>
                        {t.Language}

                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            setLanguage(
                                language === 'en'
                                    ? 'fa'
                                    : 'en'
                            )
                        }
                    >
                        <Text style={styles.settingRight}>
                            {language.toUpperCase()}
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.settingItem}>

                    <Text style={styles.settingLeft}>
                        {t.Version}
                    </Text>

                    <Text style={styles.settingRight}>
                        1.0.0
                    </Text>

                </View>
            </View>

            <View style={styles.settingsCard}>

                <Text style={styles.settingLeft}>
                    Developer: Mohammad TB
                </Text>

                <Text style={styles.settingLeft}>
                    Github:
                </Text>

                <Text style={styles.settingRight}>
                    https://github.com/tbmohammad
                </Text>

            </View>

        </View>
    );
}