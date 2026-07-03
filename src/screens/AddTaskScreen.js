import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default function AddTaskScreen({
    styles,

    task,
    setTask,

    hours,
    setHours,

    taskType,
    setTaskType,
    t,
    addTask,
    setTasks,
}) {

    return (
        <View style={styles.screen}>
            <View style={styles.addCard}>

                <Text style={styles.addTitle}>
                    {t.create}
                </Text>

                <View style={styles.typeContainer}>

                    <TouchableOpacity
                        style={[
                            styles.typeButton,

                            taskType === 'deadline' &&
                            styles.activeTypeButton
                        ]}
                        onPress={() => setTaskType('deadline')}
                    >
                        <Text style={styles.typeText}>
                            Deadline
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.typeButton,

                            taskType === 'normal' &&
                            styles.activeTypeButton
                        ]}
                        onPress={() => setTaskType('normal')}
                    >
                        <Text style={styles.typeText}>
                            Normal
                        </Text>
                    </TouchableOpacity>

                </View>

                <TextInput
                    style={styles.input}
                    placeholder={t.typesomthing}
                    placeholderTextColor="#777"
                    value={task}
                    onChangeText={setTask}
                />

                <TextInput
                    style={styles.input}
                    placeholder={
                        taskType === 'deadline'
                            ? 'Enter hours left'
                            : 'Choose hour of day'
                    }
                    placeholderTextColor="#777"

                    value={hours}
                    onChangeText={setHours}

                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={addTask}
                >
                    <Text style={styles.addButtonText}>
                        {t.addtask}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setTasks([])}
                >
                    <Text style={styles.clearButtonText}>
                        {t.clear}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}