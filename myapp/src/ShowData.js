import React from 'react';

const ShowData = ({ datas, deleteData }) => {
    const List = datas.map((data) => {
        if (data.age >= 20) {
            return (
                <div className="showData" key={data.id}>
                    <div>Name: {data.name}</div>
                    <div>Age:{data.age}</div>
                    <div>University: {data.uni}</div>
                    <button onClick={() => {deleteData(data.id)}}> Delete </button>
                </div>
            );
        } else return null;
    });

    return (
        <div className='item-list'>
            {List}
        </div>
    )

}
export default ShowData