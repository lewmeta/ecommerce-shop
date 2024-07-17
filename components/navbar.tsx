import Link from 'next/link'

import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavarbarActions from './navbar-actions'

type Props = {}

export const revalidate = 0;

const Navbar = async (props: Props) => {

    const categories = await getCategories();
    return (
        <div>
            <Container>
                <div className='relative sm:px-6 lg:px-8 flex h-16 items-center'>
                    <Link href={"/"} className='px-4 lg:ml-0 gap-x-2 '>
                        <p className="font-bold text-xl">
                            Store
                        </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavarbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar