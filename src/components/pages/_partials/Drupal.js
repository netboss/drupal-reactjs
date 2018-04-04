import React from 'react';
import { getDrupalBadge } from '../../conf/Conf';

const badge = getDrupalBadge();

const Drupal = () => (
  <div className="content-container">
    <div className="da-membership-badge">
			<a href="https://www.drupal.org/association/membership/individual">
				<img src={ badge } alt="Drupal Association Individual Member" />
			</a>
		</div>
  </div>
);

export default Drupal;