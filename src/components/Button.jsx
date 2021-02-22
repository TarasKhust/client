import React, { useEffect, useState } from 'react'
import XHR from 'classes/XHR'
import Loader from './Loader'

const Button = () => {

	const [state, setState] = useState({})
	const [loader, setLoader] = useState(false)

	const getData = () => {
		setLoader(true)
	XHR.get({
		url: "http://localhost:3000/member"
	}).then(({ data, status}) => {
		setState(data)
		status && setLoader(false)

	}).catch(( error ) => {
		console.log(error)
	})


	}

	useEffect(() => {
		getData()

	}, [])

	if (loader) {
		return <Loader/>
	}

	return (
			<div className="ui four column doubling stackable grid container">
				<div className="column">
					<p>{state.name}</p>
					<p>{state.age}</p>
				</div>
				<div className="column">
					<p></p>
					<p></p>
				</div>
				<div className="column">
					<p></p>
					<p></p>
				</div>
				<div className="column">
					<p></p>
					<p></p>
				</div>
			</div>

	)
}

export default Button
