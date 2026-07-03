export const getRemainingTime = (
    deadline,
    totalTime,
    currentTime
) => {

    const remaining =
        Math.floor(
            (deadline - currentTime) / 1000
        );

    const remainingPercent =
        (remaining * 1000 / totalTime) * 100;

    const hours =
        Math.floor(remaining / 3600);

    const minutes =
        Math.floor(
            (remaining % 3600) / 60
        );

    const seconds =
        remaining % 60;

    return {
        remaining,
        remainingPercent,
        hours,
        minutes,
        seconds,
    };
};