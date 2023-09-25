import { Avatar, Dropdown, Navbar, Sidebar } from 'flowbite-react'
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem'
import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
import reactImg from "../../../../../assets/react.svg";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

const MainLayout: FC<any> = () => {
    return (
        <>
            {/* <div className="w-screen shadow-md mb-1 sticky top-0 z-50">
                <Navbar
                    fluid
                    rounded
                >
                    <Navbar.Brand href="https://flowbite-react.com">
                        <img
                            alt="Flowbite React Logo"
                            className="mr-3 h-6 sm:h-9"
                            src={reactImg}
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite React
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 ">
                        <Dropdown
                            inline
                            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                            dismissOnClick={false}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@flowbite.com
                                </span>
                            </Dropdown.Header>
                            <DropdownItem as={Link} to="/">Profile</DropdownItem>
                            <DropdownItem as={Link} to="/">Sign out</DropdownItem>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                </Navbar>
            </div> */}

            <div className="flex h-screen">
                <div className="w-2/12 overflow-auto">
                    <Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Logo
                            href="#"
                            img={reactImg}
                            imgAlt="Flowbite logo"
                        >
                            <p>
                                Flowbite
                            </p>
                        </Sidebar.Logo>
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    href={'/admin/'}
                                    icon={HiChartPie}
                                >
                                    <p>
                                        Dashboard
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Collapse
                                    icon={HiShoppingBag}
                                    label="E-commerce"
                                >
                                    <Sidebar.Item href="#">
                                        Products
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#">
                                        Sales
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#">
                                        Refunds
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#">
                                        Shipping
                                    </Sidebar.Item>
                                </Sidebar.Collapse>

                                <Sidebar.Item
                                    href="#"
                                    icon={HiInbox}
                                >
                                    <p>
                                        Inbox
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href={'/admin/users'}
                                    icon={HiUser}
                                >
                                    <p>
                                        Users
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiShoppingBag}
                                >
                                    <p>
                                        Products
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiArrowSmRight}
                                >
                                    <p>
                                        Sign In
                                    </p>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    href="#"
                                    icon={HiTable}
                                >
                                    <p>
                                        Sign Up
                                    </p>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                <div className="w-10/12">
                    <div className="shadow-md mb-1 sticky top-0 z-50">
                        <Navbar
                            fluid
                            rounded
                        >
                            <Navbar.Brand href="#">
                                {/* <img
                                    alt="Flowbite React Logo"
                                    className="mr-3 h-6 sm:h-9"
                                    src={reactImg}
                                />
                                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                    Flowbite React
                                </span> */}
                            </Navbar.Brand>
                            <div className="flex md:order-2 ">
                                <Dropdown
                                    inline
                                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                                    dismissOnClick={false}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            Bonnie Green
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            name@flowbite.com
                                        </span>
                                    </Dropdown.Header>
                                    <DropdownItem as={Link} to="/">Profile</DropdownItem>
                                    <DropdownItem as={Link} to="/">Sign out</DropdownItem>
                                </Dropdown>
                                <Navbar.Toggle />
                            </div>
                        </Navbar>
                    </div>
                    <div className="card h-full p-5 overflow-auto z-0">
                        <Outlet />
                    </div>

                    {/* <div className="w-10/12 mt-10 px-10 fixed bottom-0 right-0">
                        <Footer container>
                            <Footer.Copyright
                                by="Flowbite™"
                                href="#"
                                year={2022}
                            />
                            <Footer.LinkGroup>
                                <Footer.Link href="#">
                                    About
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </Footer>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MainLayout