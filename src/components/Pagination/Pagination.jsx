import React, { useState, useEffect } from "react";
import "./PaginationStyle.scss";

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", top: "0px" });
    }, [currentPage]);

    function goToNextPage() {
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

    const getPaginationGroup = () => {
        const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill()
.map((_, idx) => start + idx + 1);
    };

    return (
	<div>
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
		<div>

			<button onClick={goToNextPage}>goToNextPage</button>
			<div className="pagination">
				<button
					onClick={goToPreviousPage}
					className={`prev ${currentPage === 1 ? "disabled" : ""}`}
				>
					prev
				</button>

				{getPaginationGroup().map((item, index) => (
					<button
						key={index}
						onClick={changePage}
						className={`paginationItem ${currentPage === item ? "active" : null}`}
					>
						<span>{item}</span>
					</button>
                ))}

				<button
					onClick={goToNextPage}
					className={`next ${currentPage === pages ? "disabled" : ""}`}
				>
					next
				</button>
			</div>

		</div>
	</div>
    );
};

export default Pagination;
