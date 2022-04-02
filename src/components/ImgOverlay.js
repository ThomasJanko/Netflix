import { css } from "@emotion/css";

const ImgOverlay = () => (
  <div>
    <img
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      alt=""
      // className={css`
      //   /* Thumbnail image expands to cover the player */
      //   position: absolute;
      //   width: 100%;
      //   height: 100%;
      //   top: 0;
      //   left: 0;
      //   object-fit: cover;
      // `}
    />
    
  </div>
);

export default ImgOverlay;
