import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({ tech, deleteTech }) => {
	const onDelete = e => {
		deleteTech(tech.id);
		M.toast({
			html: `${tech.firstName} ${tech.lastName} was deleted as a tech`
		});
	};

	return (
		<li className='collection-item'>
			<div>
				{tech.firstName} {tech.lastName}
				<a href='#1' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteTech }
)(TechItem);
