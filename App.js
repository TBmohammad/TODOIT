import Navbar from './src/components/Navbar';
import TaskCard from './src/components/TaskCard';
import TaskModal from './src/modals/TaskModal';
import HeroCard from './src/components/HeroCard';
import HomeScreen from './src/screens/HomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import en from './src/locales/en';
import fa from './src/locales/fa';
import createStyles
  from './src/styles/styles';
import {
  darkTheme,
  lightTheme,
}
  from './src/constants/themes';
import {
  saveTasks,
  loadTasks,
  saveSettings,
  loadSettings,
}
  from './src/storage/taskStorage';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] =
    useState(true);
  const theme =
    darkMode
      ? darkTheme
      : lightTheme;
  const [language, setLanguage] =
    useState('en');
  const t =
    language === 'fa'
      ? fa
      : en;
  const styles = createStyles(theme);
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');
  const [taskType, setTaskType] =
    useState('deadline'); const [tasks, setTasks] = useState([]);
  const [screen, setScreen] = useState('home');

  const [time, setTime] = useState(Date.now());

  useEffect(() => {

    setInterval(() => {
      setTime(Date.now());
    }, 1000);

  }, []);
  useEffect(() => {

    const getTasks = async () => {

      const saved =
        await loadTasks();

      setTasks(saved);
      const settings =
        await loadSettings();

      if (settings) {

        setDarkMode(
          settings.darkMode
        );

        setLanguage(
          settings.language
        );
      }

      setLoaded(true);
    };

    getTasks();

  }, []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      saveTasks(tasks);
    }
  }, [tasks, loaded]);
  useEffect(() => {

    if (loaded) {

      saveSettings(
        darkMode,
        language
      );
    }

  }, [
    darkMode,
    language,
    loaded
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      if (
        Number(hours) < 0.1 ||
        Number(hours) > 24
      ) {
        return;
      }
      let taskDeadline;

      if (taskType === 'deadline') {

        taskDeadline =
          Date.now() + Number(hours) * 3600000;

      } else {

        const date = new Date();

        date.setHours(Number(hours));
        date.setMinutes(0);
        date.setSeconds(0);

        taskDeadline = date.getTime();
        if (taskDeadline < Date.now()) {
          date.setDate(date.getDate() + 1);

          taskDeadline = date.getTime();
        }
      }

      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: task,
          completed: false,
          type: taskType,

          deadline: taskDeadline,

          totalTime:
            taskDeadline - Date.now(),
        },
      ]);

      setTask('');
    }
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };
  const completedTasks =
    tasks.filter((item) => item.completed).length;
  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);
  const activeTasks =
    tasks.filter(item => !item.completed);

  const completedTasksList =
    tasks.filter(item => item.completed);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editName, setEditName] = useState('');
  const [editHours, setEditHours] = useState('');
  const deleteTask = () => {
    setTasks(tasks.filter(item => item.id !== selectedTask.id));
    setSelectedTask(null);
  };

  const renameTask = () => {
    setTasks(
      tasks.map(item =>
        item.id === selectedTask.id
          ? { ...item, title: editName }
          : item
      )
    );
    setSelectedTask(null);
  };

  const changeTime = () => {
    let newDeadline;
    if (selectedTask.type === 'deadline') {

      newDeadline =
        Date.now() +
        Number(editHours) * 3600000;

    } else {
      const date = new Date();
      date.setHours(Number(editHours));
      date.setMinutes(0);
      date.setSeconds(0);
      newDeadline = date.getTime();
    }
    setTasks(
      tasks.map(item =>
        item.id === selectedTask.id
          ? {
            ...item,
            deadline: newDeadline,
            totalTime: newDeadline - Date.now(),
          }
          : item
      )
    );

    setSelectedTask(null);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>{t.welcome}</Text>
          <Text style={styles.bigTitle}>TODOIT</Text>
        </View>

        <View style={styles.profile}>
          <Image
            source={require('./assets/icon.png')}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* HOME SCREEN */}
      {screen === 'home' && (
        <HomeScreen
          styles={styles}
          theme={theme}
          t={t}

          activeTasks={activeTasks}
          completedTasksList={completedTasksList}

          tasks={tasks}
          progress={progress}

          time={time}

          toggleTask={toggleTask}

          setSelectedTask={setSelectedTask}
          setEditName={setEditName}
          setEditHours={setEditHours}
        />
      )}

      {/* ADD TASK SCREEN */}
      {screen === 'tasks' && (
        <AddTaskScreen
          styles={styles}
          t={t}
          task={task}
          setTask={setTask}

          hours={hours}
          setHours={setHours}

          taskType={taskType}
          setTaskType={setTaskType}

          addTask={addTask}
          setTasks={setTasks}
        />
      )}
      {/* SETTINGS */}
      {screen === 'settings' && (
        <SettingsScreen
          styles={styles}

          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}

          t={t}
        />

      )}
      <TaskModal
        selectedTask={selectedTask}
        t={t}
        styles={styles}

        editName={editName}
        setEditName={setEditName}

        editHours={editHours}
        setEditHours={setEditHours}

        renameTask={renameTask}
        changeTime={changeTime}
        deleteTask={deleteTask}

        setSelectedTask={setSelectedTask}
      />
      {/* NAVBAR */}
      <Navbar
        screen={screen}
        setScreen={setScreen}
        styles={styles}
      />
    </View>
  );
}
