import {Inertia} from '@inertiajs/inertia';
// @ts-ignore
import {InertiaLink, Head} from '@inertiajs/inertia-react';
import React, {PropsWithChildren} from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import JetBanner from '@/Jetstream/Banner';
import {NavBar, navigation_height} from "@/Components";
import {chakra} from '@chakra-ui/react';

interface Props {
    title: string;

    renderHeader?(): JSX.Element;
}

export default function AppLayout({title, renderHeader, children}: PropsWithChildren<Props>) {
    const page = useTypedPage();
    const route = useRoute();

    function logout(e: React.FormEvent) {
        e.preventDefault();
        Inertia.post(route('logout'));
    }

    return (
        <div>
            <Head title={title}/>
            <NavBar/>
            <JetBanner/>

            <chakra.div marginTop={`${navigation_height}px`}>
                {/*/!* <!-- Page Heading --> *!/*/}
                {/*{renderHeader ? (*/}
                {/*    <header className="bg-white shadow">*/}
                {/*        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">*/}
                {/*            {renderHeader()}*/}
                {/*        </div>*/}
                {/*    </header>*/}
                {/*) : null}*/}

                {/* <!-- Page Content --> */}
                <main>{children}</main>
            </chakra.div>
        </div>
    );
}
