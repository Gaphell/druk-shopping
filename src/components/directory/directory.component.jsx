import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            category: [
                {
                    title: 'SCI-FI',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'COMEDY',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'ACTION',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'THRILLER',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'EPIC',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                },
                {
                    title: 'HISTORY',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'large',
                    id: 6
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.category.map(({ title, imageUrl, id, size }) =>
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )
                }
            </div>
        )
    }
}

export default Directory;