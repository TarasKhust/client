import React, { useEffect, useState } from 'react'
import XHR from '../XHR'
import Loader from '../component/Loader'
import { Button } from 'semantic-ui-react'

const Users = () => {

	const [loader, setLoader] = useState(false)

	const getData = () => {
		setLoader(true)
		XHR.get({
			url: "http://localhost:3000/user"
		}).then(({ data, status}) => {
			setState(data)
			status && setLoader(false)

		}).catch(( error ) => {
			console.log(error)
		})


	}

	const onSubmit = () => {
		const data = {
			text:"dsadsadsadd",
			complete:false}
		XHR.post({
			url: "http://localhost:3000/todos",
			data: data,
		}).then(r  => {
			console.log(r)
		}).catch((error) => {
			console.log(error)
		})
	}

	useEffect(() => {
		// getData()

	}, [])

	if (loader) {
		return <Loader/>
	}

	return (
			<div className="ui four column doubling stackable grid container">
				<h1>User</h1>
				<Button onClick={onSubmit}>Click</Button>

			</div>

	)
}

export default Users