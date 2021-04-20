const INITIAL_STATE = {
    category: [
        {
            title: 'SCI-FI',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'scifi'
        },
        {
            title: 'COMEDY',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'ACTION',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'THRILLER',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: ''

        },
        {
            title: 'EPIC',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: ''

        },
        {
            title: 'HISTORY',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            size: 'large',
            id: 6,
            linkUrl: ''
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default directoryReducer;