export function staticHTMLWrapper(
  reactDom: string,
  scriptPath: string,
  initialState: string,
  css: string,
) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>EmoLogic | Tylor Shin Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <style type="text/css">${css}</style>
      </head>
      <body>
        <script>window.__INITIAL_STATE__=${initialState}</script>
        <script src="https://www.gstatic.com/firebasejs/3.7.5/firebase.js"></script>
        <script>
          var config = {
            apiKey: "AIzaSyDWoIsZDCZ0eIkyrLn3iWO7hns5a4xhZys",
            authDomain: "blog-8db2f.firebaseapp.com",
            databaseURL: "https://blog-8db2f.firebaseio.com",
            projectId: "blog-8db2f",
            storageBucket: "blog-8db2f.appspot.com",
            messagingSenderId: "906482335544"
          };
          firebase.initializeApp(config);
        </script>
        <div id="emologic-app">
          ${reactDom}
        </div>
        <script src="${scriptPath}"></script>
      </body>
    </html>
  `;
};
