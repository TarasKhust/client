import React, { useEffect, useState } from "react";
import "./CatalogStyle.scss";
import Accordion from "components/AccordeonGroup";
import Card from "components/AccordeonGroup/Card";
import Checkbox from "components/Checkbox/Checkbox";
import Arrow from "./img/arrow.svg";
import RangeSlider from "components/RangeSlider/RangeSlider";
import ListProduct from "@master/containers/ListProduct/ListProduct";
import Filter from "./img/filter.svg";
import useVisible from "modules/useVisible";
import { useQueryBrands } from "api/brands.api";
import { useQueryCategory } from "api/category.api";
import { useQueryAttributeAll } from "api/attributeAll.api";
import { useQueryProducts } from "api/productsAll.api";
import Pagination from "components/Pagination/Pagination";
import ItemViewer from "components/ItemViewer/ItemViewer";
import { useQueryBrandId } from "api/brandById.api";

const Content = () => {
    const [activeEventKey, setActiveEventKey] = useState(0);
    const { ref, isVisible, setIsVisible } = useVisible(false);

	/*
	 * const [minPrice, setMinPrice] = useState(null);
	 * const [maxPrice, setMaxPrice] = useState(null);
	 */

    ////getBrandId
    const [brandId, setBrandId] = useState([]);

    /// end getBrandId

    const { loading, data } = useQueryBrands();
    const { loading: loadingCategory, data: dataCategory } = useQueryCategory();
    const { loading: loadingAttribute, data: dataAttribute } = useQueryAttributeAll();
    const { loading: loadingProducts, data: dataProducts } = useQueryProducts();
    const { loading: loadingBrandId, data: dataBrandId } = useQueryBrandId(null, brandId);
    const itemsBrand = !loading ? data?.getAllBrands : [];
    const categoryAll = !loadingCategory ? dataCategory?.categoryFindAll : [];
    const attributeAll = !loadingAttribute ? dataAttribute?.attributeGroupFindAll : [];
    const productsAll = !loadingProducts ? dataProducts?.getAllProducts : [];
    const brandById = !loadingBrandId ? dataBrandId?.getBrandById : [];
	const [productsData, setProductsData] = useState([]);

	const [checkedState, setCheckedState] = useState(
		new Array(itemsBrand.length).fill(false)
	);
	console.log(checkedState)
	const [total, setTotal] = useState([]);

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);

		const totalPrice = updatedCheckedState.reduce(
			(sum, currentState, index) => {
				if (currentState === true) {
					// return sum + itemsBrand[index].price;
				}
				// return sum;
			},
			0
		);

		setTotal(totalPrice);
	};

	useEffect(() => {
		if (productsAll){
			setProductsData(productsAll);
		}
	}, [productsAll]);

    const sortedBy = [
		{
			id: "1",
			name: "За замовчуванням",
			type_name: "default",
		},
		{
			id: "2",
			name: "Від дешевих до дорогих",
			type_name: "ascending",
		},
		{
			id: "3",
			name: "Від дорогих до дешевих",
			type_name: "descending",
		},
	];

	const sortAscDesc = key => {
		const cloneArray = productsAll;

		switch (key){
			case "ascending":
				return setProductsData(cloneArray.slice().sort((a, b) => a.price - b.price));

				// break;
			case "descending":
				return setProductsData(cloneArray.slice().sort((a, b) => b.price - a.price));

				// break;
			default:
				return setProductsData(cloneArray);
		}
	};

    useEffect(() => {
        document.body.classList.toggle("nav_open", isVisible);
    }, [brandId, productsAll]);

    const handleBrands = (e) => {
          // setBrandId({ ...brandId, [e.target.value]: e.target.name });

         setBrandId(...brandId, e.target.value);

		// setBrandId(brandId => new Map(brandId.set(e.target.value, e.target.checked)));
    };

    return (
	<div className="tut_posuda-catalog" ref={ref}>
		<div className="catalog_inner">
			<div className={`catalog_filter ${!isVisible ? "" : "show_filter"}`}>
				<div className="filter_inner">
					<div className="category_filter">
						<h2 className="title">Категории</h2>
						<Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
							{categoryAll.map(({ id, title, children }, index) => (
								<Card key={id}>
									<Accordion.Toggle element={Card.Header} eventKey={index}>
										{title}
										{activeEventKey !== index && <div className="arrow arrow_down"><Arrow /></div>}
										{activeEventKey === index && <div className="arrow arrow_up"><Arrow /></div>}
									</Accordion.Toggle>
									<Accordion.Collapse eventKey={index} element={Card.Body}>
										<ItemViewer index={index} item={children} show="6" itemData={children} />
										{/*{children.map(({ id, title }) => {*/}
										{/*                    return (*/}
										{/*	<Checkbox*/}
										{/*		mode="yellow"*/}
										{/*		key={id}*/}
										{/*		name={title}*/}
										{/*		checked={checkedItems[title]}*/}
										{/*		onChange={handleCheckedChange}*/}
										{/*		label={title}*/}
										{/*	/>*/}
										{/*                    );*/}
										{/*                })}*/}
										{/*<div className="more_row">*/}
										{/*	<span className="btn_more" >Дивитись більше</span>*/}
										{/*</div>*/}
									</Accordion.Collapse>
								</Card>
						        ))}
						</Accordion>
						<div className="in_stock">
							<Checkbox mode="green" label="Тільки в наявності" name="Тільки в наявності" />
						</div>
					</div>
					<div className="price_filter">
						<h2 className="price_title">Фільтр</h2>
						<RangeSlider productsAll={productsAll} />
					</div>
					<div className="manufacture_filter">
						<h2 className="manufacture_title">
							Производители:
						</h2>
						<ul className="manufacture_list">

							{itemsBrand.map(({ id, name }, index) => {
						                return (
							<li key={id} >
								<Checkbox
									checked={checkedState[index]}
									value={id}
									mode="yellow"
									name={name}
									label={name}
									onChange={() => handleOnChange(index)}
								/>
							</li>
						                );
						            })}
						</ul>
						<div className="more_row">
							<span className="btn_more" >
								Дивитись більше
							</span>
						</div>
					</div>
					<div className="manufacture_filter">
						{attributeAll.map(({ id, name, attribute }) => {
						    return (
							<React.Fragment key={id}>
								<h2 className="manufacture_title">
									{name}
									:
								</h2>
								<ul className="manufacture_list" >

									{attribute.map(({ id, name }) => {
                                    return (
	<li key={id} >
		<Checkbox mode="yellow" name={name} label={name} />
	</li>
                                    );
                                })}
								</ul>
							</React.Fragment>
                            );
                        })}
					</div>
				</div>
			</div>
			<div className={`close_filter-row ${!isVisible ? "" : "show_filter-row"}`}>
				<button
					onClick={() => setIsVisible(!isVisible)}
					className="close_filter"
				>
					Назад
				</button>
			</div>
			<div className="catalog_products-list">
				<div className="products_list-inner">
					<div
						className={`products_sort-row ${!isVisible ? "" : "hide_sort"}`}
					>
						<div
							className="show_filter-btn"
							onClick={() => setIsVisible(!isVisible)}
						>
							<button className="show_filter">
								Фільтр
								<Filter />
							</button>
						</div>
						<div className="sort_inner">
							<span>Сортувати:</span>
							<select onChange={(e) => sortAscDesc(e.target.value)} className="select-sort">
								{sortedBy.map(({ type_name, name, id }) => {
                                    return (
	                                    <option value={type_name} key={id}>{name}</option>
                                    );
                                })}
							</select>
						</div>
					</div>
					<Pagination
						data={productsData}
						RenderComponent={ListProduct}
						pageLimit={5}
						dataLimit={10}
					/>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Content;