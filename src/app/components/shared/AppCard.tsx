import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";

type TAppProps = {
    app: TApp;
}


const AppCard = ({ app }: TAppProps) => {
    return (
    <div className="card border border-base-300 bg-base-100 shadow-sm transition-all hover:shadow-md">
      <div className="card-body p-4">
        <div className="flex items-center gap-4">
          {/* App Image */}
          <Link href={`/apps/${app.id}`} className="shrink-0">
            <Image
              src={app.image}
              alt={app.title}
              width={90}
              height={90}
              className="h-[90px] w-[90px] rounded-2xl object-cover"
            />
          </Link>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <Link href={`/apps/${app.id}`}>
              <h2 className="truncate text-lg font-semibold transition hover:text-primary">
                {app.title}
              </h2>
            </Link>

            <p className="mt-1 text-sm text-success">
              {app.companyName}
            </p>

            <div className="mt-2 flex items-center gap-3 text-sm opacity-70">
              <span>{app.ratingAvg} rating</span>

              <span>•</span>

              <span>{app.size} MB</span>
            </div>

            <p className="mt-2 line-clamp-2 text-sm opacity-60">
              {app.description}
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <Link
              href={`/apps/${app.id}`}
              className="btn btn-primary btn-sm rounded-full px-6"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
}
export default AppCard;