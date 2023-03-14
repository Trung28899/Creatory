import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/store/store"
import { resetLoading } from "@/store/reducers/loadingReducer"
import classes from "./Spinner.module.scss"

const Spinner = () => {
	const [needLoading, setNeedLoading] = useState(false)
	const { loading } = useSelector((state: RootState) => state)
	const dispatch = useDispatch()

	useEffect(() => {
		if (loading?.loading_count > 0) {
			setNeedLoading(true)
		} else {
			setNeedLoading(false)
		}

		if (loading.loading_count < 0) dispatch(resetLoading())
	}, [loading, dispatch])

	if (needLoading) {
		return (
			<div className={classes.container}>
				<div className={classes.ldsSpinner}>
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		)
	}

	return <div />
}

export default Spinner
