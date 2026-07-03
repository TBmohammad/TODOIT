import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

export default function Navbar({
    screen,
    setScreen,
    styles,
}) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity
                onPress={() => setScreen('home')}
            >
                <Text
                    style={[
                        styles.navIcon,
                        screen === 'home' &&
                        styles.activeNav,
                    ]}
                >
                    🏠
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.plusButton}
                onPress={() => setScreen('tasks')}
            >
                <Text style={styles.plusText}>
                    ＋
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setScreen('settings')}
            >
                <Text
                    style={[
                        styles.navIcon,
                        screen === 'settings' &&
                        styles.activeNav,
                    ]}
                >
                    ⚙️
                </Text>
            </TouchableOpacity>
        </View>
    );
}