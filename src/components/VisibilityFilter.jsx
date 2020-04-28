import React from "react";
import { VISIBILITY_FILTERS } from "../constants/filterType";
import { connect } from "react-redux";
import { setFilter } from "../actions/actions";

const VisibilityFilters = ({ activeFilterType, activeFilterIndex, setFilter }) => {
	return (
		<div className="visibility-filters">
			{Object.keys(VISIBILITY_FILTERS).map((filterKey, index) => {
				const currentFilter = VISIBILITY_FILTERS[filterKey];
				return (
					<span
						key={`visibility-filter-${currentFilter}`}
						className={`filter ${currentFilter === activeFilterType && "filter--active"}`}
						onClick={() => setFilter(currentFilter, index) /** waiting for setFilter handler*/}
					>
						{currentFilter}
					</span>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	const {type, index} = state.visibilityFilter;

	return {
		activeFilterType: type,
		activeFilterIndex: index,
	};
};
export default connect(
	mapStateToProps,
	{ setFilter }
)(VisibilityFilters);
