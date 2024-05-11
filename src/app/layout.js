// Metadata object for the application
export const metadata = {
  title: 'AntiqueAlley',  // The title of the application 
  description: 'An online antique shop', // A brief description of what the application is about
}

// RootLayout is a React functional component that defines the basic HTML structure of a page.
// This component is typically used to wrap around the entire application or a specific page
// in a Next.js application to provide common layout structure or HTML tags.
export default function RootLayout({ children }) {
  
  // This function receives one prop:
  // children - This is a special React prop that allows components to pass elements
  // as children to other components. Here, it will contain any child components or elements
  // that are included between the opening and closing tags of <RootLayout> when used.
 return (
    // The component returns a basic HTML structure with the <html> and <body> tags.
    <html lang="en"> {/* Sets the language of the document to English */}
      <body>{children}</body> {/* This renders the children elements passed to the component */}
    </html>
  )
}
