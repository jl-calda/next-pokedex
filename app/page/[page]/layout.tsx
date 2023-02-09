import "../../../styles/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex max-w-3xl mx-auto">{children}</div>;
};

export default Layout;
