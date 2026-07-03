import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

export default function CompletedTask({
    item,
    styles,
    toggleTask,
}) {

    return (
        <TouchableOpacity
            onPress={() => toggleTask(item.id)}
            style={[
                styles.taskCard,
                { opacity: 0.5 }
            ]}
        >

            <View style={styles.taskCircle}>
                <Text style={styles.taskCircleText}>
                    ✓
                </Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text
                    style={[
                        styles.taskTitle,
                        {
                            textDecorationLine:
                                'line-through'
                        }
                    ]}
                >
                    {item.title}
                </Text>
            </View>

        </TouchableOpacity>
    );
}