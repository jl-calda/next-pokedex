import Footer from "./_Footer";
import Header from "./_Header";
import "../styles/globals.css";
import "../styles/card.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="max-w-6xl mx-auto flex flex-col items-center min-h-[100vh]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
