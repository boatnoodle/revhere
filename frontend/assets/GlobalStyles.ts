import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family:"ibm-plex-thai";
src:url("https://use.typekit.net/af/1bad7a/00000000000000003b9b3253/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/1bad7a/00000000000000003b9b3253/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/1bad7a/00000000000000003b9b3253/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:switch;font-style:normal;font-weight:400;
}

@font-face {
font-family:"ibm-plex-thai";
src:url("https://use.typekit.net/af/4262c2/00000000000000003b9b3256/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/4262c2/00000000000000003b9b3256/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/4262c2/00000000000000003b9b3256/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:switch;font-style:normal;font-weight:700;
}

@font-face {
font-family:"ibm-plex-thai-looped";
src:url("https://use.typekit.net/af/4e8c05/00000000000000003b9b3d5d/27/l?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/4e8c05/00000000000000003b9b3d5d/27/d?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/4e8c05/00000000000000003b9b3d5d/27/a?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"ibm-plex-thai-looped";
src:url("https://use.typekit.net/af/0ee0e2/00000000000000003b9b3d5a/27/l?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/0ee0e2/00000000000000003b9b3d5a/27/d?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/0ee0e2/00000000000000003b9b3d5a/27/a?primer=01e54ac443e5962d277497d5db0e95b217578553b6e87aefd4b4a8392944ef0e&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}

.tk-ibm-plex-thai { font-family: "ibm-plex-thai",sans-serif; }
.tk-ibm-plex-thai-looped { font-family: "ibm-plex-thai-looped",sans-serif; }


/* .tox-fullscreen .tox.tox-tinymce.tox-fullscreen{
  z-index: 1050;
  top: 100px!important;
  bottom: 51px!important;
  width: 80% !important;
  height: 80% !important;
  left: 50% !important;
  transform: translate(-50%, 0);
} */

.mce-content-body img {
max-width: 100% !important;
height: auto;
}


body {
  font-family: ibm-plex-thai, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
}

`;
