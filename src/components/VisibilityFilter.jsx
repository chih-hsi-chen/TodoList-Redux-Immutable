import React from "react";
import { VISIBILITY_FILTERS } from "../constants/filterType";
import { connect } from "react-redux";
import { setFilter } from "../actions/actions";
import { getFilterInfo } from "../helpers/selector";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
	return (
		<div className="visibility-filters">
			{Object.keys(VISIBILITY_FILTERS).map((filterKey, index) => {
				const currentFilter = VISIBILITY_FILTERS[filterKey];
				return (
					<span
						key={`visibility-filter-${currentFilter}`}
						className={`filter ${currentFilter === activeFilter.type && "filter--active"}`}
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
	return {
		activeFilter: getFilterInfo(state),
	};
};
export default connect(
	mapStateToProps,
	{ setFilter }
)(VisibilityFilters);
