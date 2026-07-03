import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function TaskModal({
    selectedTask,
    styles,

    editName,
    setEditName,

    editHours,
    setEditHours,
    t,
    renameTask,
    changeTime,
    deleteTask,

    setSelectedTask,
}) {

    if (!selectedTask) {
        return null;
    }

    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,

                backgroundColor: 'rgba(0,0,0,0.75)',

                justifyContent: 'center',
                alignItems: 'center',

                zIndex: 999,
            }}
        >

            <View style={styles.menuBox}>

                <Text style={styles.menuTitle}>
                    Edit Task
                </Text>

                <TextInput
                    style={styles.input}
                    value={editName}
                    onChangeText={setEditName}
                    placeholder="New Name"
                    placeholderTextColor="#777"
                />

                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={renameTask}
                >
                    <Text style={styles.modalButtonText}>
                        {t.CHANGE_NAME}
                    </Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    value={editHours}
                    onChangeText={setEditHours}
                    placeholder="New Hours"
                    placeholderTextColor="#777"
                />

                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={changeTime}
                >
                    <Text style={styles.modalButtonText}>
                        {t.CHANGE_TIME}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.modalButton,
                        { backgroundColor: '#ff4d4d' }
                    ]}
                    onPress={deleteTask}
                >
                    <Text style={styles.modalButtonText}>
                        {t.DELETE_TASK}

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.modalButton,
                        { backgroundColor: '#232c45' }
                    ]}
                    onPress={() => setSelectedTask(null)}
                >
                    <Text style={styles.modalButtonText}>
                        {t.CLOSE}
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}