# Company Website Template

This project is a template for creating a company website using Next.js. Below are detailed instructions on how to work with Next.js and customize this template for your company.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ericdequ/Company_Website_Template.git
    cd Company_Website_Template
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains the application's pages.
- `components/`: Contains reusable UI components.
- `public/`: Static files like images and fonts.
- `styles/`: Global and component-specific styles.

## Customizing the Template

### Updating Company Information

1. Open `pages/index.js` and update the placeholder text with your company's information.
2. Update the metadata in `pages/_document.js` for SEO purposes.

### Adding New Pages

1. Create a new file in the `pages/` directory, e.g., `about.js`.
2. Add your content and export the component:
    ```jsx
    const About = () => {
        return <div>About Us</div>;
    };

    export default About;
    ```
3. In The pages folder is each individual page of your project and it imports components you can make your own or edit the components we have 


### Styling

You can use CSS modules or styled-components for styling. For global styles, edit `styles/globals.css`.

### Deploying

To build the project for production, run:
```bash
npm run build
# or
yarn build
# or 
pnpm run build
```
Then, start the production server:
```bash
npm start
# or
yarn start
#or 
pnpm run dev
```

You can deploy the project to platforms like Vercel, Netlify, or any other hosting service that supports Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

This project is licensed under the MIT License.

---

Feel free to customize this template to suit your company's needs. Happy coding!
