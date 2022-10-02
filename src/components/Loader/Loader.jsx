import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ align = 'center', children }) => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#C14242"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: align,
        }}
        visible={true}
      >
        {children}
      </ThreeDots>
    </div>
  );
};

Loader.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right", "start", "end"]),
};

export default Loader;
