// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';

const HOME_ITEMS = [
    {
        title: 'Query',
        
    },
    {
        title: 'Load',
        
    },
];

// const AppHome = () => {
//     return(
//         <h1>hello</h1>

//         {HOME_ITEMS.map((card) => (
//             <div
//               key={card.title}
//               className="slds-box slds-box_x-small"
//             >
//               <article className="slds-tile slds-media">

//                 <div className="slds-media__body">
//                   <h3
//                     className="slds-text-title_caps"
       
//                   >
//                     {card.title}
//                   </h3>
//                   </div>
//               </article>
//             </div>
//         ))}
//     );
// };

const AppHome = () => {
    return(
        
        <div> {/* This is where I get the error message */}
            <h1>POPULAR MOVIES</h1>
                {   
                    HOME_ITEMS?.map((card) => (
                        <div>
                            <p>{card.title}</p>
                        </div>
                    ))
                }
        </div>
    );
};

export default AppHome;