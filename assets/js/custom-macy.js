var masonry = new Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    useOwnImageLoader: false,
    debug: true,
    mobileFirst: true,
    columns: 1,
    margin: {
        y: 5,
        x: 5,
    },
    breakAt: {
        1200: 4,
        991: 3,
        767: {
            margin: {
                x: 24,
                y: 24,
            },
        },
        320: 2,
        0: {
            margin: {
                x: 15,
                y: 15,
            },
        },
    },
});