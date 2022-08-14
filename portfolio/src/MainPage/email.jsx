import React from 'react'
import GlobalTitle from '../Components/globalTitle'

function Email() {
  return (
    <section id="mailme">
  <div className="container ht">
    <div className="jumbotron ">
      
          <GlobalTitle tag="Send a Mail"/>
          <p className='m-2 p-2'>Feel free to get in touch.</p>
          <form className='m-2 p-2' action="mailto:prakharsingh.singh5@gmail.com" method="post" encType="text/plain">
            Name:<br />
            <input type="text" name="name" /><br />
            E-mail:<br />
            <input type="text" name="mail" /><br />
            Message:<br />
            <input type="text" name="comment" size={20} /><br /><br />
            <input className='mr-3' type="submit" defaultValue="Send" />
            <input type="reset" defaultValue="Reset" />
          </form>
          
        </div>
      
  </div>
</section>



  )
}

export default Email