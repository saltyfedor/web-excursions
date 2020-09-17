import React from 'react';
import {Link} from 'react-router-dom'

const ExcursionList = (props) => {

    const excursionList = props.list.map(item => {
        return (          
                <div className = "flex ba pa3 ma2">
                <p>{item.excTitle}</p>
                
                <Link style={{
                      marginLeft: 'auto'
                }} to={{
                    pathname: `/admin/excursion/edit/${item.excTitle}`,
                    state: {
                        item: item
                    }
                }}>
                    <p className="f6 link dim ba ph3 pv2 ma2 dib black">Управлять</p>
                </Link>
                </div>               
        );
    })

    return (
        <div>
            {excursionList}
            <Link style={{
                textDecoration: 'none',              
            }} to={{
                    pathname: "/admin/excursion/new",      
                }}>
                    <p className="f5 link dim ba ph3 pv2 ma2 tc black">Создать новую</p>
            </Link>
        </div> 
    )
 }

export default ExcursionList