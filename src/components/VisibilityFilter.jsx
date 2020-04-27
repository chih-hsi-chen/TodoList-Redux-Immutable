import React from "react";
import { VISIBILITY_FILTERS } from "../constants/filterType";
import { connect } from "react-redux";
import { setFilter } from "../actions/actions";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
	return (
		<div className="visibility-filters">
			{Object.keys(VISIBILITY_FILTERS).map(filterKey => {
				const currentFilter = VISIBILITY_FILTERS[filterKey];
				return (
					<span
						key={`visibility-filter-${currentFilter}`}
						className={`filter ${currentFilter === activeFilter && "filter--active"}`}
						onClick={() => setFilter(currentFilter) /** waiting for setFilter handler*/}
					>
						{currentFilter}
					</span>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return { activeFilter: state.visibilityFilter };
};
export default connect(
	mapStateToProps,
	{ setFilter }
)(VisibilityFilters);
