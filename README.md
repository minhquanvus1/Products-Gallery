# Products Gallery Application:

- This is the Products Gallery Application, where users can view the products and their details with infinite scrolling. On top of that, users can also search for products by their name, check out to buy a Product with PayPal, and view the integrated Map of the Products Gallery

- The Application is built with:

  - Frontend: React TypeScript, Bootstrap 5
  - Backend: Java Spring Boot
  - Deploy: Render, AWS

- For more details about the Frontend, please check the `Frontend_README.md` file: [Frontend_README.md](Frontend/products-gallery/Frontend_README.md)

- For more details about the Backend, please check the `Backend_README.md` file: [Backend_README.md](Backend/products-gallery/Backend_README.md)

- Since the app uses PayPal for payment, it is recommended to use the PayPal sandbox account for testing the payment feature, as below:

  - PayPal Sandbox Account:
    - `Email: sb-liy9s30399617@personal.example.com`
    - `Password: Y}8i\*&}Z`

- The app has been deployed on both Render, and AWS:
  - For the Fullstack Application: https://products-gallery.onrender.com
  - For the Frontend only (before integrated with Backend): http://my-products-gallery-bucket.s3-website.us-east-2.amazonaws.com/

**Notice that: because the App's Backend is deployed on Render, the first time you access the App, it may take a few seconds to wake up the Backend server.**

**Tip: you can try: https://products-gallery-spring-boot.onrender.com/hello on the browser until it sends the response on `hello world` on the Browser to wake up the Backend server, before you access the Website**
