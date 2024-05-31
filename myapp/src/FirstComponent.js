import React from 'react';

const FirstComponent = ({ datas }) => {
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

    const List = datas.map(data => {
        return (data.age >= 20) ? (
            <div className="tung" key={data.id}>
                <div>Name: {data.name}</div>
                <div>Age:{data.age}</div>
                <div>University: {data.uni}</div>
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