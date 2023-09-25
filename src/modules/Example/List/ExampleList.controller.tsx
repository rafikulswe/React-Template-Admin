import { Button, Card, Checkbox, Pagination, Table, TextInput } from 'flowbite-react'
import { FC } from 'react'

const ExampleListController: FC<any> = () => {


    return (
        <Card>
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Examples
            </h5>
            <div className="grid gap-4 grid-cols-6">
                <div className="col-start-1 col-end-3 flex">
                    <TextInput
                        id="small"
                        sizing="sm"
                        type="text"
                    />
                    <Button outline size="sm">
                        <p>Search</p>
                    </Button>
                </div>
                <div className="col-end-8 z-0">
                    <Button className='z-0'>Add New User</Button>

                </div>
            </div>

            <Table hoverable className='border-2 overflow-x-scroll md:overflow-x-scroll sm:overflow-x-scroll'>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Product name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Color
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                Microsoft Surface Pro
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                Microsoft Surface Pro
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                Microsoft Surface Pro
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                Microsoft Surface Pro
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <p>
                                Microsoft Surface Pro
                            </p>
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <p>
                                    Edit
                                </p>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <div className="flex items-center justify-end text-center mt-4">
                <Pagination
                    currentPage={1}
                    layout="table"
                    onPageChange={page => 1}
                    showIcons
                    totalPages={1000}
                />
            </div>
        </Card>
    )
}

export default ExampleListController