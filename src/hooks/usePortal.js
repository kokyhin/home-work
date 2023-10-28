import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function Portal({ children, to }) {
  const renderPlace = document.getElementById(to);
  if (!renderPlace) return renderPlace;
  return (
    createPortal(
      children,
      renderPlace,
    )
  );
}
export default Portal;

Portal.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
