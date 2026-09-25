


import InstallAppButton from "@/app/components/Apps/installAppButton";
import { getAllApp } from "@/lib/Apps";
import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type TAppDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

const AppDetailsPage = async ({ params }: TAppDetailsProps) => {
    const { id } = await params;

    const data = await getAllApp();

    const app = data.find((app: TApp) => app.id === Number(id));

    if (!app) {
        notFound();
    }

    const totalRatings = app.ratings.reduce(
        (total, item) => total + item.count,
        0
    );

    const getPercentage = (count: number) => {
        if (!totalRatings) return 0;

        return Math.round((count / totalRatings) * 100);
    };

    return (
        <main className="container mx-auto px-4 py-16">
            {/* App Header */}
            <div className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        {/* Image */}
                        <div className="avatar">
                            <div className="w-32 rounded-3xl md:w-40">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    width={160}
                                    height={160}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold md:text-4xl">
                                {app.title}
                            </h1>

                            <p className="mt-2 text-lg font-medium text-primary">
                                {app.companyName}
                            </p>

                            {/* Stats */}
                            <div className="stats stats-vertical mt-6 border border-base-300 shadow-none sm:stats-horizontal">
                                <div className="stat">
                                    <div className="stat-title">Rating</div>
                                    <div className="stat-value text-2xl">
                                        {app.ratingAvg}
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">Reviews</div>
                                    <div className="stat-value text-2xl">
                                        {app.reviews}
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value text-2xl">
                                        {app.downloads}+
                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">Size</div>
                                    <div className="stat-value text-2xl">
                                        {app.size} MB
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            
                            <div className="mt-6 flex flex-wrap gap-3">
                               <InstallAppButton app={app}></InstallAppButton>
                                </div>

                                <Link
                                    href="/apps"
                                    className="btn btn-outline"
                                >
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            

            {/* Content */}
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
                {/* Left */}
                <div className="space-y-8 lg:col-span-2">
                    {/* About */}
                    <div className="card border border-base-300 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                About this app
                            </h2>

                            <p className="leading-7 opacity-70">
                                {app.description}
                            </p>
                        </div>
                    </div>

                    {/* Ratings */}
                    <div className="card border border-base-300 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                Ratings & Reviews
                            </h2>

                            <div className="mt-6 grid gap-8 md:grid-cols-[150px_1fr]">
                                {/* Rating */}
                                <div>
                                    <div className="text-6xl font-bold">
                                        {app.ratingAvg}
                                    </div>

                                    <p className="mt-2 opacity-60">
                                        {app.reviews} reviews
                                    </p>
                                </div>

                                {/* Rating Bars */}
                                <div className="space-y-4">
                                    {[...app.ratings]
                                        .reverse()
                                        .map((rating) => {
                                            const percentage = getPercentage(rating.count);

                                            return (
                                                <div
                                                    key={rating.name}
                                                    className="flex items-center gap-4"
                                                >
                                                    <span className="w-10 text-sm">
                                                        {rating.name.replace(" star", "")}
                                                    </span>

                                                    <progress
                                                        className="progress progress-primary flex-1"
                                                        value={percentage}
                                                        max="100"
                                                    />

                                                    <span className="w-12 text-right text-sm opacity-60">
                                                        {percentage}%
                                                    </span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div>
                    <div className="card border border-base-300 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">
                                App Information
                            </h2>

                            <div className="mt-4">
                                <div className="flex justify-between gap-4 py-3">
                                    <span className="opacity-60">
                                        Developer
                                    </span>

                                    <span className="text-right font-semibold">
                                        {app.companyName}
                                    </span>
                                </div>

                                <div className="divider my-0" />

                                <div className="flex justify-between py-3">
                                    <span className="opacity-60">
                                        Rating
                                    </span>

                                    <span className="font-semibold">
                                        {app.ratingAvg}
                                    </span>
                                </div>

                                <div className="divider my-0" />

                                <div className="flex justify-between py-3">
                                    <span className="opacity-60">
                                        Size
                                    </span>

                                    <span className="font-semibold">
                                        {app.size} MB
                                    </span>
                                </div>

                                <div className="divider my-0" />

                                <div className="flex justify-between py-3">
                                    <span className="opacity-60">
                                        Downloads
                                    </span>

                                    <span className="font-semibold">
                                        {app.downloads}+
                                    </span>
                                </div>

                                <div className="divider my-0" />

                                <div className="flex justify-between py-3">
                                    <span className="opacity-60">
                                        Reviews
                                    </span>

                                    <span className="font-semibold">
                                        {app.reviews}
                                    </span>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block mt-5">
                                Install App
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppDetailsPage;