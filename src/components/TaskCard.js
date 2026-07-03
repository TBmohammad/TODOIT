import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import {
    getRemainingTime
}
    from '../utils/time';
export default function TaskCard({
    item,
    index,
    time,
    styles,
    toggleTask,
    setSelectedTask,
    setEditName,
    theme,
    setEditHours,
}) {

    const {
        remainingPercent,
        hours,
        minutes,
        seconds,
    } = getRemainingTime(
        item.deadline,
        item.totalTime,
        time
    );
    return (
        <TouchableOpacity
            onLongPress={() => {

                setSelectedTask(item);
                setEditName(item.title);
                setEditHours('');
            }}
            style={[
                styles.taskCard,

                {
                    backgroundColor:

                        item.type === 'deadline'
                            ? theme.deadlineCard
                            : theme.normalCard
                },

                remainingPercent < 50 &&
                styles.warningCard,

                remainingPercent < 30 &&
                styles.dangerCard,

                remainingPercent < 10 &&
                styles.criticalCard,

            ]}
        >
            <View style={styles.taskCircle}>
                <Text style={styles.taskCircleText}>
                    {index + 1}
                </Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.taskTitle}>
                    {item.title}
                </Text>

                <Text style={styles.taskSubtitle}>

                    {
                        item.type === 'deadline'
                            ? `${hours}h ${minutes}m ${seconds}s left`
                            : `Today • ${new Date(item.deadline)
                                .toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                })}`
                    }

                </Text>

            </View>

            <TouchableOpacity
                onPress={() => toggleTask(item.id)}
                style={[
                    styles.checkBox,
                    item.completed &&
                    styles.checkedBox
                ]}
            >
                {
                    item.completed && (
                        <Text style={styles.checkText}>
                            ✓
                        </Text>
                    )
                }
            </TouchableOpacity>
        </TouchableOpacity>
    );
}