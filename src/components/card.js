import React from 'react'
import PropTypes from 'prop-types'

function Card({ image, ...props }) {
	return (
		<div className="card">
			{image && <img src={image.src} className="card-img-top" alt={image.alt} />}
			<div className="card-body">
				{props.children}
			</div>
		</div>
	)
}

Card.propTypes = {
	image: PropTypes.object
}

export default Card