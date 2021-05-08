import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowR from "./img/arrowRight.svg";
import ArrorL from "./img/arrowLeft.svg";
import Circle from "./img/circle.svg";
import "./PaginationStyle.scss";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: "100px" });
    }, [currentPage]);

    function goToNextPage() {
        if (currentPage === pages.length){
            return;
        }

        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const pages = [];

    for (let i = 1; i < Math.floor(data.length / pageLimit); i++){
        pages.push(i);
    }

    const renderPageNumber = pages.map((num) => {
        return (
	<button
		onClick={changePage}
		key={num}
		className={`pagination_item ${currentPage === num ? "active" : null}`}
	>
		{num}
	</button>
        );
    });

    return (
	<div className="tut_posuda-pagination">
		<ul className="products_list">
			{getPaginatedData().map(({ _id, packaging, image, description, vendor, name, price, overview }) => (
				<RenderComponent
					overview={overview}
					packaging={packaging}
					key={_id}
					_id={_id}
					image={image}
					description={description}
					vendor={vendor}
					name={name}
					price={price}
				/>
                ))}
		</ul>
		<div className="pagination_items">
			<div className="watch_more-column">

				<button
					onClick={goToNextPage}
					className={`btn_next-page ${currentPage === pages.length ? "disabled" : ""}`}
				>
					<Circle />
					<span>Показати ще</span>
				</button>
			</div>

			<div className="pagination">
				<button
					onClick={goToPreviousPage}
					className={`prev ${currentPage === 1 ? "disabled" : ""}`}
				>
					<ArrorL />
				</button>
				    {renderPageNumber}
				<button
					onClick={goToNextPage}
					className={`next ${currentPage === pages.length ? "disabled" : ""}`}
				>
					<ArrowR />
				</button>
			</div>

		</div>
	</div>
    );
};

Pagination.propTypes = {
    data: PropTypes.array.isRequired,
    pageLimit: PropTypes.number,
    dataLimit: PropTypes.number,
    RenderComponent: PropTypes.func,
};

export default Pagination;
