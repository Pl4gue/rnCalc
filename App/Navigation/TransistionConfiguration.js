export default let TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index} = scene;

            return MyTransition(index, position);
        }
    }
};

let MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [.8, 1, 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange,
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange,
    });

    return {
    opacity,
        transform: [
            {scaleY}
        ]
    };
};