import CustomNavbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <CustomNavbar />
            <main>{children}</main>
        </>
    );
}
