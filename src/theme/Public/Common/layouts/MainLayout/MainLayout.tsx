import { Button, Card, Navbar } from 'flowbite-react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import reactImg from "../../../../../assets/react.svg";
import eventImg1 from "../../../../../assets/image-1.jpg";

const MainLayout: FC<any> = () => {
    return (
        <div>
            <Navbar
                fluid
                rounded
            >
                <Navbar.Brand href="#">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src={reactImg}
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    <Button>
                        Get started
                    </Button>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>

            </Navbar>

            <div className="container mx-auto w-4/12 text-center mt-8">
                <h1 className='text-4xl font-extrabold border-b-2'>Upcoming <span className='text-yellow-400'>Events</span></h1>
            </div>
            <div className="container mx-auto grid gap-4 grid-cols-3 mt-8">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={eventImg1}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Noteworthy technology acquisitions 2021</p>
                    </h5>

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>Add to cart</p>
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={eventImg1}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Noteworthy technology acquisitions 2021</p>
                    </h5>

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>Add to cart</p>
                        </a>
                    </div>
                </Card>
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={eventImg1}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>Noteworthy technology acquisitions 2021</p>
                    </h5>

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            href="#"
                        >
                            <p>Add to cart</p>
                        </a>
                    </div>
                </Card>

            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout