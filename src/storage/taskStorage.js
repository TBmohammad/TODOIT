import AsyncStorage
    from '@react-native-async-storage/async-storage';

export const saveTasks = async (tasks) => {

    try {

        await AsyncStorage.setItem(
            'TASKS',
            JSON.stringify(tasks)
        );

    } catch (e) {
        console.log(e);
    }

};

export const loadTasks = async () => {

    try {

        const savedTasks =
            await AsyncStorage.getItem('TASKS');

        if (savedTasks !== null) {
            return JSON.parse(savedTasks);
        }

        return [];

    } catch (e) {

        console.log(e);

        return [];
    }

};
export const saveSettings = async (
    darkMode,
    language
) => {

    try {

        await AsyncStorage.setItem(
            'SETTINGS',

            JSON.stringify({
                darkMode,
                language,
            })
        );

    } catch (e) {

        console.log(e);
    }
};
export const loadSettings = async () => {

    try {

        const saved =
            await AsyncStorage.getItem(
                'SETTINGS'
            );

        if (saved !== null) {
            return JSON.parse(saved);
        }

        return null;

    } catch (e) {

        console.log(e);

        return null;
    }
};