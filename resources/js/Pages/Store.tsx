import React from 'react';
import Welcome from '@/Jetstream/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import JetButton from "@/Jetstream/Button";
import useTypedPage from "@/Hooks/useTypedPage";
import {Inertia} from "@inertiajs/inertia";

export default function Store() {
    const page = useTypedPage();

    return (
        <AppLayout
            title="Dashboard"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Store
                </h2>
            )}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <a href="#!" className="paddle_button"
                           data-override={page.props.productOneLink}
                            // data-theme="none"
                        >
                            Buy Now!
                        </a>
                        <a href="#!" className="paddle_button"
                           data-override={page.props.productWaveLink}
                            // data-theme="none"
                        >
                            Buy Wave Pro
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
