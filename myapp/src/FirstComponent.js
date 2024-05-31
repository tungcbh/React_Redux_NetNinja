import React from 'react';

const FirstComponent = ({ Data }) => {
    // const List = Data.map(item => {
    //     if (item.age >= 20) {
    //         return (
    //             <div className="tung" key={item.id}>
    //                 <div>Name: {item.name}</div>
    //                 <div>Age:{item.age}</div>
    //                 <div>University: {item.uni}</div>
    //             </div>
    //         )
    //     }
    // })

    const List = Data.map(item => {
        return (item.age >= 20) ? (
            <div className="tung" key={item.id}>
                <div>Name: {item.name}</div>
                <div>Age:{item.age}</div>
                <div>University: {item.uni}</div>
            </div>
        ) : null;
    })

    return (
        <div className='item-list'>
            {List}
        </div>
    )

}
export default FirstComponent