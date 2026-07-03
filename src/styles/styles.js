import { StyleSheet } from 'react-native';
const createStyles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },

        header: {
            paddingTop: 70,
            paddingHorizontal: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        smallText: {
            color: theme.secondaryText,
            fontSize: 16,
        },

        bigTitle: {
            color: theme.text,
            fontSize: 36,
            fontWeight: 'bold',
            marginTop: 5,
        },

        profile: {
            width: 55,
            height: 55,
            borderRadius: 20,
            backgroundColor: '#6c5ce7',
            justifyContent: 'center',
            alignItems: 'center',
        },

        profileText: {
            color: theme.text,
            fontSize: 22,
            fontWeight: 'bold',
        },

        screen: {
            paddingHorizontal: 22,
            paddingBottom: 140,
            paddingTop: 30,
        },

        heroCard: {
            backgroundColor: '#6c5ce7',
            borderRadius: 35,
            padding: 25,
            marginBottom: 35,

            shadowColor: '#6c5ce7',
            shadowOffset: {
                width: 0,
                height: 15,
            },
            shadowOpacity: 0.5,
            shadowRadius: 25,
            elevation: 15,
        },

        heroTitle: {
            color: theme.heroTitle,
            fontSize: 26,
            fontWeight: 'bold',
        },

        heroSubtitle: {
            color: '#dcd6ff',
            fontSize: 16,
            marginTop: 10,
            marginBottom: 30,
        },

        statsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        statBox: {
            width: '47%',
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: 25,
            padding: 20,
        },

        statNumber: {
            color: theme.text,
            fontSize: 28,
            fontWeight: 'bold',
        },

        statText: {
            color: '#e7e2ff',
            marginTop: 8,
            fontSize: 15,
        },

        sectionTitle: {
            color: theme.text,
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        completedTitle: {
            marginTop: 40,
        },
        taskCard: {
            backgroundColor: theme.card,
            borderRadius: 28,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 18,
        },

        taskCircle: {
            width: 55,
            height: 55,
            borderRadius: 20,
            backgroundColor: '#6c5ce7',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 18,
        },

        taskCircleText: {
            color: theme.text,
            fontSize: 20,
            fontWeight: 'bold',
        },

        taskTitle: {
            color: theme.text,
            fontSize: 20,
            fontWeight: '600',
        },

        taskSubtitle: {
            color: theme.secondaryText,
            marginTop: 5,
        },

        taskIcon: {
            fontSize: 24,
        },

        emptyContainer: {
            marginTop: 60,
            alignItems: 'center',
        },

        emptyEmoji: {
            fontSize: 70,
        },

        emptyTitle: {
            color: theme.text,
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 20,
        },

        emptySubtitle: {
            color: theme.secondaryText,
            marginTop: 10,
            textAlign: 'center',
            fontSize: 16,
            paddingHorizontal: 30,
        },

        addCard: {
            backgroundColor: theme.card,
            borderRadius: 35,
            padding: 25,
            marginTop: 10,
        },

        addTitle: {
            color: theme.text,
            fontSize: 30,
            fontWeight: 'bold',
        },

        addSubtitle: {
            color: theme.secondaryText,
            marginTop: 10,
            marginBottom: 30,
            fontSize: 16,
        },

        input: {
            backgroundColor: theme.input,
            borderRadius: 22,
            padding: 20,
            color: theme.text,
            fontSize: 18,
            borderWidth: 1,
            borderColor: '#232c45',
            marginBottom: 25,
        },

        addButton: {
            backgroundColor: '#6c5ce7',
            borderRadius: 22,
            paddingVertical: 18,
            alignItems: 'center',
            marginBottom: 15,
        },

        addButtonText: {
            color: theme.addButtonText,
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 1,
        },

        clearButton: {
            backgroundColor: '#232c45',
            borderRadius: 22,
            paddingVertical: 18,
            alignItems: 'center',
        },

        clearButtonText: {
            color: '#c8d0ff',
            fontSize: 16,
            fontWeight: '600',
        },

        settingsCard: {
            backgroundColor: theme.card,
            borderRadius: 35,
            padding: 25,
            marginTop: 20,
        },

        settingsTitle: {
            color: theme.text,
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 30,
        },

        settingItem: {
            backgroundColor: theme.input,
            borderRadius: 20,
            padding: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
        },

        settingLeft: {
            color: theme.text,
            fontSize: 17,
        },

        settingRight: {
            color: '#6c5ce7',
            fontSize: 17,
            fontWeight: 'bold',
        },

        navbar: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            height: 80,
            backgroundColor: theme.card,
            borderRadius: 30,

            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 15,
            elevation: 15,
        },

        navIcon: {
            fontSize: 28,
            opacity: 0.5,
            color: theme.text,
        },

        activeNav: {
            opacity: 1,
            transform: [{ scale: 1.2 }],
        },

        plusButton: {
            width: 70,
            height: 70,
            borderRadius: 25,
            backgroundColor: '#6c5ce7',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -40,

            shadowColor: '#6c5ce7',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 15,
        },

        plusText: {
            color: theme.text,
            fontSize: 35,
            fontWeight: 'bold',
        },
        profileImage: {
            width: 55,
            height: 55,
            borderRadius: 20,
        },
        checkBox: {
            width: 30,
            height: 30,

            borderRadius: 12,

            borderWidth: 2,
            borderColor: '#6c5ce7',

            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'transparent',

            marginRight: 15,
        },

        checkedBox: {
            backgroundColor: '#6c5ce7',

            shadowColor: '#6c5ce7',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,

            elevation: 8,
        },

        checkText: {
            color: theme.text,

            fontSize: 18,
            fontWeight: 'bold',
        },
        warningCard: {
            backgroundColor: '#2a2a2a',
        },
        dangerCard: {
            backgroundColor: '#4a2d2d',
        },
        criticalCard: {
            backgroundColor: '#7a1f1f',

            borderWidth: 1,
            borderColor: '#ff4d4d',
        },


        activeTypeButton: {
            backgroundColor: '#6c5ce7',
        },
        typeContainer: {
            flexDirection: 'row',
            marginBottom: 20,
            gap: 10,
        },

        typeButton: {
            flex: 1,
            backgroundColor: '#232c45',
            padding: 15,
            borderRadius: 18,
            alignItems: 'center',
            marginTop: 10,

        },

        menuBox: {
            width: '88%',

            backgroundColor: theme.card,

            borderRadius: 35,

            padding: 25,

            borderWidth: 1,
            borderColor: '#2d3754',

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.4,
            shadowRadius: 20,

            elevation: 20,
        },

        menuTitle: {
            color: theme.text,
            fontSize: 28,
            fontWeight: 'bold',

            marginBottom: 25,
        },
        modalButton: {
            backgroundColor: '#6c5ce7',

            paddingVertical: 18,

            borderRadius: 20,

            alignItems: 'center',

            marginBottom: 15,
        },
        modalButtonText: {
            color: theme.text,
            fontSize: 17,
            fontWeight: 'bold',
            letterSpacing: 1,
        },
        typeText: {
            color: theme.typeText,
            fontWeight: 'bold',


        },
    });
export default createStyles;