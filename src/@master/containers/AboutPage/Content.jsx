import React from "react";
import "./AboutPageStyle.scss";
import AboutImg from "./img/about_svg.svg";
import AboutImg2 from "./img/about2_svg.svg";

const Content = () => {
    return (
	<div className="tut_posuda-about">
		<div className="about_inner">
			<div className="about_overlay vis_r">
				<div className="overlay_inner img_r"></div>
			</div>
			<div className="about_overlay vis_l">
				<div className="overlay_inner img_l"></div>
			</div>
			<h4 className="about_title">Про нас</h4>
			<div className="about_content">
				<div className="content-img">
					<AboutImg />
				</div>
				<h2 className="content_title">
					Ласкаво просимо на сайт © tut_posuda!
				</h2>
				<p className="content_description">
					<b>З нами ваш посуд буде стильним і функціональним. </b>
					У нас ви знайдете багато різних варіантів на вибір при покупці посуду для вашого будинку.
					Столовий посуд буває різних розмірів, форм і візерунків. Ми підбираємо в наш каталог виняткові варіанти і компонування.
				</p>
				<h2 className="content_title">
					Столовий посуд
				</h2>
				<p className="content_description">
					Ми поділяємо столовий посуд на два основних типи.
					Перший тип, це предмети які використовуються для приготування, тобто посуд в якій готується їжа.
					Це каструлі, сковорідки і тому подібні предмети.
					Другий тип це посуд в якій подають їжу на стіл.

					Разом ці предмети називають столовим посудом, яка в свою чергу ділиться на такі групи:
				</p>
				<ul className="content_list limit_w ">
					<li>
						Тарілки;
					</li>
					<li>
						Чашки;
					</li>
					<li>
						Салатниці і селедочниці;
					</li>
					<li>
						Чайники та кавники;
					</li>
					<li>
						Склянки, чарки і келихи;
					</li>
					<li>
						Допоміжний столовий посуд;
					</li>
				</ul>
				<h2 className="content_title">
					Функціональність
				</h2>
				<p className="content_description">
					Ми представляємо величезний вибір столового посуду який можна використовувати на різних видах конфорок, як електро, газових, та чавунних.
				</p>
				<p className="content_description">
					Також переконайтеся, що купуєте посуд, який призначений для духовки і мікрохвильової печі.
				</p>
				<p className="content_description">
					У нас можна купити посуд для використання в будь-яких випадках в залежності від вашого способу життя.
				</p>
				<div className="content-img">
					<AboutImg2 />
				</div>
				<h2 className="content_title">Чому вигідно купувати у нас?</h2>
				<p className="content_description">
					Якщо ви дочитали сюди, тоді ми розповімо коротко про те чим ми можемо вас зацікавити:
				</p>
				<ul className="content_list">
					<li>
						Ми знаходимося в Києві, але працюємо по всій Україні
					</li>
					<li>
						Вибирайте з великого асортименту!
					</li>
					<li>
						У нашому магазині представлені товари відомих всьому світу виробників:
					</li>
					<ol>
						<li>Luminarc</li>
						<li>Pyrex</li>
						<li>Svanera</li>
						<li>Tramontina</li>
						<li>Pasabahce</li>
						<li>Svanera</li>
						<li>Wilmax</li>
						<li>Bohemia</li>
						<li>Bormioli Rocco</li>
						<li>Vicrila</li>
						<li>Krosno</li>
					</ol>
					<li>
						Весь товар сертифікований
					</li>
					<li>
						Страховка на повну вартість товару при відправленні
					</li>
				</ul>
				<div className="row_center">
					<h4>Купуйте столовий посуд з нами - швидко, вигідно і зовсім недорого.</h4>
					<span>І хай не б'ється</span>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Content;