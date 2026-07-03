import {
    View,
    Text,
} from 'react-native';

export default function HeroCard({
    styles,
    tasks,
    t,
    progress,
}) {

    return (
        <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>
                {t.welcome}
            </Text>

            <Text style={styles.heroSubtitle}>
                {t.welcome2}
            </Text>

            <View style={styles.statsRow}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>
                        {tasks.length}
                    </Text>

                    <Text style={styles.statText}>
                        Tasks
                    </Text>
                </View>

                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>
                        {progress}%
                    </Text>

                    <Text style={styles.statText}>
                        progress
                    </Text>
                </View>
            </View>
        </View>
    );
}