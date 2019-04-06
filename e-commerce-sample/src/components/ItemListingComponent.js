import React from 'react';
import Card from '../common/Card';
import Item from '../common/Item';
import './ItemListingComponent.css';
import { Link } from 'react-router-dom';

{/* <div style={{ gridColumn: '1/3' }}>
    <Item />
</div>

<div style={{ gridRow: '1/3', gridColumn: '3' }}>
    <Item />
</div>  */}

const ITEM_COUNT = 40;

// sample data generator
const dummyData = () => {
    let data = [];

    for (let i = 0; i < ITEM_COUNT; i++) {
        data.push({
            id: i,
            imageUrl: "https://loremflickr.com/300/240?random",
            title: `Sample Title ${i + 1}`,
            description: `Sample Description ${i + 1}`
        });
    }

    return data;
}

const DUMMY_DATA = dummyData();

class ItemListingComponent extends React.Component {
    render() {
        return (
            <Card>
                <div className="item_listing_root">
                    <div className="item_listing_container">
                        {
                            DUMMY_DATA && DUMMY_DATA.map((data) => {
                                return <Link to={`/items/${data.id}`}>
                                    <Item
                                        key={data.id}
                                        title={data.title}
                                        description={data.description}
                                        imageUrl={data.imageUrl}
                                    />
                                </Link>
                            })
                        }
                    </div>
                </div>
            </Card>
        )
    }
}

export default ItemListingComponent;