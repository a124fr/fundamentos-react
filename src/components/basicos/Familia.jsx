import React, {cloneElement} from 'react';

 // eslint-disable-next-line 
export default props => {
    return (         
        // <div>
        //     {React.Children.map(props.children, (child) => {
        //         return cloneElement(child, props);
        //     })}            
        // </div>
        <div>
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i});
            })}            
        </div>
    );
}