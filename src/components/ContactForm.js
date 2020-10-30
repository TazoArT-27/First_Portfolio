import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'myPortfolio', e.target, 'user_lgEKnjkZpZdOECieL63TM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    // return(
    //     <div>
    //         <div className="container">
    //         <form onSubmit={sendEmail}>
    //                 <div className="row pt-5 mx-auto">
    //                     <div className="col-8 form-group mx-auto">
    //                         <input type="text" className="form-control" placeholder="Name" name="name"/>
    //                     </div>
    //                     <div className="col-8 form-group pt-2 mx-auto">
    //                         <input type="email" className="form-control" placeholder="Email Address" name="email"/>
    //                     </div>
    //                     <div className="col-8 form-group pt-2 mx-auto">
    //                         <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
    //                     </div>
    //                     <div className="col-8 pt-3 mx-auto">
    //                         <input type="submit" className="btn btn-info" value="Send Message"></input>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // )
    return(
        <div class="container-contact100" id="contact">
		<div class="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>

		<div class="wrap-contact100">
			<div class="contact100-form-title" style={{backgroundImage: 'url(image/bg-01.jpg)'}}>
				<span class="contact100-form-title-1">
					Contact Us
				</span>

				<span class="contact100-form-title-2">
					Feel free to drop us a line below!
				</span>
			</div>

			<form class="contact100-form validate-form" onSubmit={sendEmail}>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<span class="label-input100">Full Name:</span>
					<input class="input100" type="text" name="name" placeholder="Enter full name"/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<span class="label-input100">Email:</span>
					<input class="input100" type="email" name="email" placeholder="Enter email addess"/>
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<span class="label-input100">Message:</span>
					<textarea class="input100" name="message" placeholder="Your Comment..."></textarea>
					<span class="focus-input100"></span>
				</div>

				<div class="container-contact100-form-btn">
					{/* <input class="contact100-form-btn" type="submit">
						<span>
							Submit
							<i class="fa fa-long-arrow-right m-l-7"></i>
						</span>
					</input> */}
                    <div className="col-8 pt-3 mx-auto">
                             <input type="submit" className="btn btn-smart" value="Send Message"></input>
                             
                         </div>
				</div>
			</form>
		</div>
	</div>
    )


}