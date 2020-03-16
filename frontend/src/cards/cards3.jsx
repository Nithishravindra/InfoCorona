import React from 'react';

import './card-style.css';

const Card3=props=>{
    return(
        <div className="card text-center shadow">
            
        
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">1.Avoid close contact with people who are sick. Maintain at least three feet distance between yourself and anyone who is coughing or sneezing.</p>
            <p className="card-text text-secondary">2.Avoid touching your eyes, nose, and mouth.</p>
            <p className="card-text text-secondary">3. Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom, before eating, and after blowing your nose, coughing, or sneezing.</p>
            <p className="card-text text-secondary">4. If soap and water are not readily available, use an alcohol-based hand sanitiser with at least 60% alcohol. Always wash hands with soap and water when hands are visibly dirty.</p>
            <p className="card-text text-secondary">5. If you have a fever, cough and difficulty breathing, seek medical attention immediately.</p>
        
        </div>
        </div>
    );
}
export default Card3;