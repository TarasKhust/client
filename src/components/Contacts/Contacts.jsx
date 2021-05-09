import React from "react";
import "./ContactsStyle.scss";

import Clock from "./img/clock.svg";
import Mail from "./img/mail.svg";
import Instagram from "./img/instagram.svg";
import Facebook from "./img/facebook.svg";
import Phone from "./img/phone.svg";
import Pinterest from "./img/pinterest.svg";
import Location from "./img/location.svg";

const Contacts = () => {
    return (
	<div className="tut_posuda-contacts" id="contacts">
		<div className="contacts_inner">
			<h2 className="contacts_title">Контакти</h2>
			<div>
				<ul className="view_contacts">
					<li>
						<Phone />
						<a href="tel:+38 (068) 675 89 87">+ 38 (068) 675 89 87</a>
					</li>
					<li>
						<Mail />
						<a href="mailto:tut_posuda@gmail.com">tut_posuda@gmail.com</a>
					</li>
					<li>
						<Location />
						<span>Україна, Київ</span>
					</li>
					<li>
						<Clock />
						<span> с 10:00 до 20:00, без выходных</span>
					</li>
				</ul>
				<div className="social_contacts">
					{/*<a href="" target="_blank">*/}
					{/*	<Pinterest />*/}
					{/*</a>*/}
					<a href="https://m.facebook.com/Tut-Posuda-100766448739248/" target="_blank">
						<Facebook />
					</a>
					<a href="https://www.instagram.com/tut_posuda_ua/" target="_blank">
						<Instagram />
					</a>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Contacts;