export default `
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,500');
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Montserrat;
  font-weight: 200;
}

h1, h2, h3, h4, h5 {
  font-weight: 500;
}

/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  z-index: 2 !important;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: white;
  padding: 4.5em 1.5em 0 0;
  font-size: 1.15em;
  overflow-x: visible;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;

  
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

`;