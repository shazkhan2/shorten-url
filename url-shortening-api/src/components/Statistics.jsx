import React from 'react';
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

export default function Statistics() {
  return (
<>
<section>
    <h2>
    Advanced statistics
    </h2>
        <p>
        Track how your links are performing across the web with our 
  advanced statistics dashboard.
        </p>
        <div>
            <article>
                <img src={brand} alt='' />
                <h3>Brand recognition</h3>
                <p>
                    

  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.
                </p>
            </article>
            <article>
                <img src={detailed} alt='' />
                <h3>  Detailed Records
</h3>
                <p>
                    

                Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
                </p>
            </article>
            <article>
                <img src={fully} alt='' />
                <h3>  Fully Customizable
</h3>
                <p>
                    
                Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
                </p>
            </article>
        </div>
</section>
</>
)
}
