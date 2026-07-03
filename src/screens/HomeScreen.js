import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import CompletedTask
    from '../components/CompletedTask';
import HeroCard from '../components/HeroCard';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({
    styles,

    activeTasks,
    completedTasksList,

    tasks,
    progress,

    time,
    theme,
    toggleTask,
    t,
    setSelectedTask,
    setEditName,
    setEditHours,
}) {

    return (
        <ScrollView
            contentContainerStyle={styles.screen}
            showsVerticalScrollIndicator={false}
        >

            <HeroCard
                styles={styles}
                tasks={tasks}
                progress={progress}
                t={t}

            />

            <Text style={styles.sectionTitle}>
                Today's Tasks
            </Text>

            {activeTasks.length === 0 ? (

                completedTasksList.length > 0 ? (

                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyEmoji}>
                            🎉
                        </Text>

                        <Text style={styles.emptyTitle}>
                            All Tasks Completed
                        </Text>

                        <Text style={styles.emptySubtitle}>
                            You finished everything for today.
                        </Text>
                    </View>

                ) : (

                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyEmoji}>
                            😴
                        </Text>

                        <Text style={styles.emptyTitle}>
                            {t.noTasks}
                        </Text>

                        <Text style={styles.emptySubtitle}>
                            {t.addsome}

                        </Text>
                    </View>

                )

            ) : (

                [...activeTasks]
                    .sort((a, b) => a.deadline - b.deadline)
                    .map((item, index) => (
                        <TaskCard
                            key={item.id}

                            item={item}
                            index={index}
                            time={time}

                            styles={styles}
                            theme={theme}

                            toggleTask={toggleTask}

                            setSelectedTask={setSelectedTask}
                            setEditName={setEditName}
                            setEditHours={setEditHours}

                        />
                    ))

            )}

            {completedTasksList.length > 0 && (

                <>
                    <Text
                        style={[
                            styles.sectionTitle,
                            styles.completedTitle
                        ]}
                    >
                        Completed Tasks
                    </Text>

                    {
                        completedTasksList.map((item) => (
                            <CompletedTask
                                key={item.id}

                                item={item}

                                styles={styles}

                                toggleTask={toggleTask}
                            />
                        ))
                    }

                </>

            )}

        </ScrollView>
    );
}