import React from 'react';
import {Link} from 'react-router-dom'

const AdminDateList = ({ dates, excursionList }) => {  
    const dateList = dates.map(item => {
        return (          
                <div className = "flex ba pa3 ma2">
                    <p>{item.excName} {item.excDate}</p>
                <Link style={{
                      marginLeft: 'auto'
                }}
                    to={{
                    pathname: `/admin/date/edit/${item.excId}`,
                    state: {
                        item: item
                    }
                }}>
                    <p className="f6 link dim ba ph3 pv2 ma2 dib black">Edit</p>
                </Link>
                </div>               
        );
    })
    return (
        <div>
            {dateList}
            <Link style={{ textDecoration: 'none' }} to={{
                    pathname: "/admin/date/new",
                state: {
                     list: excursionList
                     
                    }
                }}>
                    <p className="f5 link dim ba tc black no-underline mh2 ph3 pv2">Создать новый</p>
        </Link>
        </div>
       
    );
}

export default AdminDateList;