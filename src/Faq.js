// import React from 'react'
// import './faqcss.scss'
// import { useState } from 'react';

// const Accordion = ({ title, children }) => {
//     const [isOpen, setOpen] = React.useState(false);
    
//   return (
//     <>
//     <div className="accordion-wrapper"> 
//     <div
//       className={`accordion-title ${isOpen ? "open" : ""}`}
//       onClick={() => setOpen(!isOpen)}
//       >
//       {title}
//     </div>
//     <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
//       <div className="accordion-content">{children}</div>
//     </div>
//     </div>
//     </>
// )
// };

// const Faq = () => (
// <div className="wrapper">
//   <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodale
//   </Accordion>
//   <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales massa. Ut sed eros luctus quam rutrum vehicula. Nulla non maximus lectus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodale
//   </Accordion>
// </div>
// );
// export default Faq