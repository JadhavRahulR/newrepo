import React from 'react';

 const About = (props) =>{
  return (
    <>
      <div className='one'>
      <div className='container  my-5'  >


        <div className="accordion accordion-flush" id="accordionFlushExample" >
          <div className="accordion-item" >
            <h2 className="accordion-header" id="flush-headingOne" >
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{color:props.mode==='dark'?"white":'black', backgroundColor:props.mode==='dark'?"blue":'white'}}>
               Analyze Your Text
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">TextUtils gives you a way to Analyze your text quickly and efficintly .Be it words Count,charecter count or </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{color:props.mode==='dark'?"white":'black', backgroundColor:props.mode==='dark'?"blue":'white'}}>
                Free to Use 
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">It is very easy to use and free to use .it gives you a good platform to change words in upper case and lower case.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{color:props.mode==='dark'?"white":'black', backgroundColor:props.mode==='dark'?"blue":'white'}}>
                Browser Compatible
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the  className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>

          </div>
          </div>
          </div>
      </div>


        </>

        )
}
export default About;
