import React from 'react'

export default function About(props) {
  return (
    <div className="accordion my-5 " id="accordionExample ">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='light'?'#809ff4':'#2a2a2c', color:props.mode==='light'?'black':'#f8fbff',cursor: 'pointer'}}>
            What TextUtils do?
          </button>
        </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white',cursor: 'pointer'}}>
              This website provides 5 features It can change the text to lowercase, uppercase, clear the text, copy the text to clipboard or remove extra spaces in the text,for the ease of user there is a switch for enabling light mode or light mode as per user's comfort.you can navigate to MyTextUtils, to know more about it and use it.
            </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='light'?'#809ff4':'#2a2a2c', color:props.mode==='light'?'black':'#f8fbff',cursor: 'pointer'}}>
            About the Router and tech stack
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white',cursor: 'pointer'}}>
            This uses the router package to dynamically change the content of pages without loading the whole website, react is itself useful for its single page library framework. this about page is shown when clicked on about textutils and dissapears when clicked on textutils in the navbar, this way it saves user data to load pages and keep the application lightweight.you can also see this accordion example that is also a smooth function.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='light'?'#809ff4':'#2a2a2c', color:props.mode==='light'?'black':'#f8fbff',cursor: 'pointer'}}>
            About the source that I followed
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
          <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white',cursor: 'pointer'}}>
            This website is made by Ayushi Singh following the react js course provided by code with harry.accordion-body, though the transition does limit overflow.
          </div>
        </div>
      </div>
</div>
  )
}
