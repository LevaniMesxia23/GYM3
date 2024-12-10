import PropTypes from "prop-types";


const BackgroundImage = ({ imageUrl, height }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: height,
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </>
  );
};

export default BackgroundImage;

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
